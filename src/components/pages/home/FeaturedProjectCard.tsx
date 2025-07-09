'use client';

import type { Project } from '@/types/project';
import { Badge } from '@/components/ui/Badge';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowDownRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

type FeaturedProjectCardProps = Pick<Project, 'id' | 'title' | 'description' | 'technologies' | 'imageUrl'> & {
    className?: string;
};

export const FeaturedProjectCard = ({
                                        title,
                                        description,
                                        technologies,
                                        imageUrl,
                                        id,
                                        className,
                                    }: FeaturedProjectCardProps) => {
    const [isHoveredOrTapped, setIsHoveredOrTapped] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        setIsTouchDevice(isTouch);
    }, []);

    const handleCardClick = () => {
        if (isTouchDevice) {
            setIsHoveredOrTapped((prev) => !prev);
        }
    };

    return (
        <div
            onMouseEnter={() => !isTouchDevice && setIsHoveredOrTapped(true)}
            onMouseLeave={() => !isTouchDevice && setIsHoveredOrTapped(false)}
            onClick={handleCardClick}
            className={`relative overflow-hidden h-[280px] md:h-[360px] text-white w-full ${className} cursor-pointer`}
        >
            <Image
                src={imageUrl}
                alt={title}
                fill
                className="z-10 object-cover transition-transform duration-500"
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={isHoveredOrTapped ? { opacity: 0.3 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black z-20 pointer-events-none"
            />

            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={isHoveredOrTapped ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="absolute top-6 left-6 right-6 z-30"
            >
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, idx) => (
                        <Badge key={idx} label={tech} />
                    ))}
                </div>
                <p className="text-md md:text-lg lg:text-xl xl:text-2xl">{description}</p>
            </motion.div>

            <div className="absolute bottom-6 left-6 right-6 z-30 flex items-center justify-between">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-medium">{title}</h3>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={isHoveredOrTapped ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                    whileHover={{ scale: 1.2 }}
                >
                    <Link href={`/projects/${id}`}>
                        <ArrowDownRightIcon className="w-6 h-6" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};
