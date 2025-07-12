import {Hero} from "@/components/shared/Hero";
import {beyondContent, callToAction, heroContent, valueContent} from "@/data/about";
import {Timeline} from "@/components/pages/about/Timeline";
import {ImageSplitSection} from "@/components/shared/ImageSplitSection";
import {SectionHeading} from "@/components/ui/SectionHeading";
import {CallToAction} from "@/components/shared/CallToAction";

export default function About() {
    return (
        <>
            <Hero
            heading={heroContent.heading}
            subheading={heroContent.subheading}
            imageUrl={heroContent.imageUrl}
            />
            <Timeline/>
            <ImageSplitSection imageUrl={valueContent.imageUrl} reverse={valueContent.reverse}>
                <SectionHeading heading={valueContent.heading}/>
                <div className="flex flex-col gap-4">
                    {valueContent.paragraph.map((paragraph, index) => (
                        <p key={index}>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </ImageSplitSection>

            <ImageSplitSection imageUrl={beyondContent.imageUrl} reverse={beyondContent.reverse}>
                <SectionHeading heading={beyondContent.heading}/>
                <div className="flex flex-col gap-4">
                    {beyondContent.paragraph.map((paragraph, index) => (
                        <p key={index}>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </ImageSplitSection>
            <CallToAction {...callToAction}/>
        </>
    );
}
