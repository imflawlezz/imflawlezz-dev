import Image from "next/image";
import {resolveAsset} from "@/utils/resolveAsset";
import {Button} from "@/components/ui/Button";

export const Hero = () => {
    return (
        <section className="w-full h-full flex flex-col md:flex-row bg-background-variant">

            <Image
                alt={"Hero image"}
                src={resolveAsset('sections', 'home-hero.jpg')}
                width={1920}
                height={1080}
                className="w-screen md:w-1/2 h-auto aspect-video md:aspect-auto object-cover"
            />

            <div className="w-full md:w-1/2 px-9 py-8 md:px-18 md:py-16">
                <div className="flex flex-col gap-8">
                    <h1 className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
                        Hi, I&apos;m Egor —<br/>
                        a <span className='text-accent'>frontend developer</span>,<br/>
                        <span className='text-accent-secondary'>student</span>,<br/>
                        and <span className='text-attention'>tech tinkerer</span>.
                    </h1>

                    <p className="text-base md:text-lg lg:text-xl text-muted">
                        I build modern, responsive websites and explore the world of full-stack development.<br/>
                        When I’m not coding interfaces, I prototype mobile apps and create DIY smart devices powered by microcontrollers.<br/>
                        Always learning, always building.
                    </p>

                    <div className="flex flex-row gap-4">
                        <Button
                            label={"See my work"}
                            linkHref={'projects'}

                        />
                        <Button
                            label={"Get in touch"}
                            linkHref={'contacts'}
                            isPrimary={false}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}