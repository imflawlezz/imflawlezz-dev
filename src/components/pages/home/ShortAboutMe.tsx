import {LinkComponent} from "@/components/shared/LinkComponent";
import {SectionHeading} from "@/components/shared/SectionHeading";
import Image from "next/image";
import {resolveAsset} from "@/utils/resolveAsset";

export const ShortAboutMe = () => {
    return (
        <section className="flex flex-col-reverse items-center md:flex-row py-8 md:p-0 bg-background-variant">
            <div className="flex flex-col items-start justify-center gap-9 px-12 lg:px-24 ">
                <SectionHeading heading={"About me"}/>

                <div className="flex flex-col gap-4 md:gap-5  text-base lg:text-lg text-muted">
                    <p>
                        I&apos;m Egor, a frontend developer and computer science student based in Poland.
                        I enjoy building modern, accessible interfaces using technologies like React, Tailwind, and Next.js.
                    </p>

                    <p>
                        Outside of web development, I experiment with embedded systems and mobile apps — combining
                        creativity with electronics to bring ideas to life. I’m passionate about learning, building,
                        and making things that feel meaningful.
                    </p>

                    <p>
                        Want to know more?
                    </p>
                </div>

                <LinkComponent href={'about'} label={"Read more"}/>
            </div>

            <Image
                alt={"My photo"}
                src={resolveAsset('sections', 'my-photo.jpeg')}
                width={728}
                height={1024}
                className="h-auto md:h-full w-auto md:w-auto px-20 py-10 md:p-0 "
            />
        </section>
    )
}