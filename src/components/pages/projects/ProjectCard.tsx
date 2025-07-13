import clsx from "clsx";
import {ProjectCardProps} from "@/types/ui";
import Image from "next/image";
import {Badge} from "@/components/ui/Badge";
import {LinkComponent} from "@/components/ui/LinkComponent";
import { motion } from "motion/react";
import {useScrollDirection} from "@/hooks/useScrollDirection";

export const ProjectCard = ({
    title,
    description,
    technologies,
    imageUrl,
    id,
    className,
    reverse = false,
}:ProjectCardProps)=> {
    const scrollDirection = useScrollDirection();
    return (
        <div
            className={clsx(
                `w-full flex flex-col ${className} `,
                reverse ? 'md:flex-row-reverse' : 'md:flex-row'
            )}
        >
            <div className="relative h-[300px] w-full md:w-3/5 md:h-auto">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover"
                    quality={100}
                />
            </div>

            <div className="
                flex flex-col items-start w-full md:w-2/5 justify-between
                px-10 py-8 md:px-16 md:py-12 2xl:px-32 2xl:py-24
                bg-background-variant gap-12 md:gap-24
                ">
                <motion.h1
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.7 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-2xl md:text-3xl"
                >
                    {title}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: scrollDirection === 'down' ? -20 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.7 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="flex flex-col items-start justify-end gap-4"
                >
                    <div className="flex flex-wrap gap-2 mb-4">
                        {technologies.map((tech, idx) => (
                            <Badge key={idx} label={tech} />
                        ))}
                    </div>

                    <p className="text-muted ">
                        {description}
                    </p>

                    <LinkComponent href={`/projects/${id}`} label={"Read more"}/>
                </motion.div>
            </div>
        </div>
    )
}