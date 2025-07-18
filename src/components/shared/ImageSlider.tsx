'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import {ImageSliderProps} from "@/types/ui";

export const ImageSlider = ({
    images,
    alt = 'Gallery Image'
}: ImageSliderProps) => {
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: 'snap',
        slides: {
            perView: 1,
            spacing: 16,
        },
    });

    const scrollPrev = () => instanceRef.current?.prev();
    const scrollNext = () => instanceRef.current?.next();

    return (
        <div className="relative">
            <div ref={sliderRef} className="keen-slider md:rounded-2xl overflow-hidden">
                {images.map((src, idx) => (
                    <div key={idx} className="keen-slider__slide">
                        <div className="relative w-full aspect-video">
                            <Image
                                src={src}
                                alt={`${alt} ${idx + 1}`}
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={scrollPrev}
                className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background/90 text-foreground p-1 rounded-full shadow-md transition-all z-10"
            >
                <ChevronLeftIcon className="w-5 h-5" />
            </button>

            <button
                onClick={scrollNext}
                className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background/90 text-foreground p-1 rounded-full shadow-md transition-all z-10"
            >
                <ChevronRightIcon className="w-5 h-5" />
            </button>
        </div>
    );
};
