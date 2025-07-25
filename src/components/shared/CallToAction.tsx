import {CallToActionProps} from "@/types/ui";
import Image from "next/image";
import {Button} from "@/components/ui/Button";
import {resolveAsset} from "@/utils/resolveAsset";

export const CallToAction = ({
    heading,
    subheading,
    image,
    buttons,
    className
}:CallToActionProps) => {
    return (
        <section className="relative overflow-hidden p-10 sm:p-18 md:p-24 lg:p-28 xl:p-36">
            <Image
                src={resolveAsset('cta', image)}
                alt={heading}
                fill
                className="z-10 object-cover object-center transition-transform duration-500"
            />

            <div
                className="absolute inset-0 bg-black/30 z-20 pointer-events-none"
            />



            <div className={`${className} relative flex flex-col justify-center z-20 gap-12`}>
                <div className={`flex flex-col justify-center gap-4 text-white`}>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl">
                        {heading}
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl">
                        {subheading}
                    </p>
                </div>

                <div className="flex flex-row gap-2 md:gap-6">
                    {buttons?.map((button, idx) => (
                        <Button
                            key={idx}
                            label={button.label}
                            linkHref={button.linkHref}
                            className={button.className}
                            isPrimary={ idx == 0 }
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}