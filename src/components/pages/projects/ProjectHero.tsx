import Image from 'next/image';
import {ProjectHeroProps} from "@/types/project";



export const ProjectHero = ({
    heading,
    imageUrl
}: ProjectHeroProps) => {
    return (
        <section className="relative flex flex-col items-start justify-center

        pt-24 pb-6 px-10
        sm:pt-36 sm:pb-8 sm:x-16
        md:pt-48 md:pb-10 md:px-24
        lg:pt-56 lg:pb-12 lg:px-36
        ">
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
