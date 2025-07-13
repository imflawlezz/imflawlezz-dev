'use client';

import Image from 'next/image';

interface ProjectHeroProps {
    heading: string;
    imageUrl: string;
}

export const ProjectHero = ({ heading, imageUrl }: ProjectHeroProps) => {
    return (
        <section className="relative px-36 py-48 flex flex-col items-start justify-center">
            <Image
                alt={heading}
                src={imageUrl}
                fill
                className="-z-10 object-cover object-center"
                priority
            />
            <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none" />

            <div className="relative z-10 text-white text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-tight">
                    {heading}
                </h1>
            </div>
        </section>
    );
};
