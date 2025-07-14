'use client';
import Image from "next/image";
import {resolveAsset} from "@/utils/resolveAsset";
import {Button} from "@/components/ui/Button";
import {HeroProps} from "@/types/home";
import {useParams} from "next/navigation";
import {localizedPath} from "@/utils/localizedPath";

export const Hero = ({
    heading,
    paragraph,
    buttons
}:HeroProps) => {

    return (
        <section className="w-full h-full flex flex-col md:flex-row">

            <Image
                alt={"Hero image"}
                src={resolveAsset('hero', 'hero-home.jpg')}
                width={1920}
                height={1080}
                className="w-screen md:w-1/2 h-auto aspect-video md:aspect-auto object-cover"
            />

            <div className="w-full md:w-1/2 px-9 py-8 md:px-18 md:py-16">
                <div className="flex flex-col gap-8">
                    <h1 className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
                        {heading.map(({ text, className, br, prefix }, idx) => (
                            <span key={idx} className={className ?? ''}>
                                {prefix ?? ''}
                                {text}
                                {br && <br />}
                            </span>
                        ))}
                    </h1>

                    <p className="text-base md:text-lg lg:text-xl text-muted">
                        {paragraph.map((item, idx) => (
                            <span
                            key={idx}>
                                {item}
                                {idx !== paragraph.length && <br/>}
                            </span>
                        ))}
                    </p>

                    <div className="flex flex-row gap-4">
                        {buttons.map((item, idx) => (
                            <Button
                                key={idx}
                                label={item.label}
                                linkHref={item.linkHref}
                                isPrimary={item.isPrimary}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}