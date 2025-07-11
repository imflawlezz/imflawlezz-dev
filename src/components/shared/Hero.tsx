import {HeroProps} from "@/types/ui";
import Image from "next/image"

export const Hero = ({
    heading,
    subheading,
    imageUrl,
    className
}:HeroProps) => {
    return (
        <section className={`relative px-12 py-24 flex flex-col items-center justify-center ${className}`}>
            <Image
                alt={heading}
                src={imageUrl}
                fill
                className="-z-10 object-cover object-center"
            />

            <div
                className="absolute inset-0 bg-black/50 z-0 pointer-events-none"
            />

            <div className={`relative flex flex-col gap-8 z-20 items-center text-center text-white ${className}`}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-tight">
                    {heading}
                </h1>

                <p className="text-lg md:text-xl max-w-4xl text-center">
                    {subheading}
                </p>
            </div>



        </section>
    )
}