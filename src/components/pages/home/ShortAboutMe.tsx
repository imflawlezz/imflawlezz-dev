import {LinkComponent} from "@/components/shared/LinkComponent";
import {SectionHeading} from "@/components/shared/SectionHeading";
import Image from "next/image";
import {resolveAsset} from "@/utils/resolveAsset";
import {aboutMeContent} from "@/data/home";

export const ShortAboutMe = () => {
    return (
        <section className="flex flex-col-reverse items-center md:flex-row py-8 md:p-0 bg-background-variant">
            <div className="flex flex-col items-start justify-center gap-9 px-12 lg:px-24 ">
                <SectionHeading heading={aboutMeContent.heading}/>

                <div className="flex flex-col gap-4 md:gap-5  text-base lg:text-lg text-muted">
                    {aboutMeContent.paragraph.map((item, index) => (
                        <p
                            key={index}
                        >
                            {item.text}
                        </p>
                    ))}
                </div>

                <LinkComponent href={'about'} label={"Read more"}/>
            </div>

            <Image
                alt={"My photo"}
                src={resolveAsset('sections', 'my-photo.jpeg')}
                width={728}
                height={1024}
                className="h-auto w-auto md:w-full px-20 py-10 md:p-0"
            />
        </section>
    )
}