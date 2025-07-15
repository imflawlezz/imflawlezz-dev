'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { ImageSplitSectionProps } from '@/types/layout';
import { motion } from 'motion/react';
import {resolveAsset} from "@/utils/resolveAsset";

export const ImageSplitSection = ({
                                      imageUrl,
                                      imageAlt = 'Section Image',
                                      reverse = false,
                                      children,
                                  }: ImageSplitSectionProps) => {
    return (
        <motion.section
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={clsx(
                'w-full flex flex-col md:min-h-[480px]',
                reverse ? 'md:flex-row-reverse' : 'md:flex-row'
            )}
        >
            <div className="relative h-[320px] w-full md:w-1/2 md:h-auto">
                <Image
                    src={resolveAsset('sections', imageUrl)}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    quality={100}
                />
            </div>

            <div
                className="flex flex-col items-start justify-center w-full md:w-1/2 px-16 2xl:px-32 py-18 2xl:py-36
                bg-background-variant gap-9"
            >
                {children}
            </div>
        </motion.section>
    );
};
