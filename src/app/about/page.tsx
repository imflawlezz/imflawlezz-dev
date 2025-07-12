import {Hero} from "@/components/shared/Hero";
import {beyondContent, callToAction, heroContent, valueContent} from "@/data/about";
import {Timeline} from "@/components/pages/about/Timeline";
import {CallToAction} from "@/components/shared/CallToAction";
import {ImageSplitSectionRenderer} from "@/components/shared/ImageSplitSectionRenderer";

export default function About() {
    return (
        <>
            <Hero {...heroContent}/>
            <Timeline/>
            <ImageSplitSectionRenderer content={valueContent}/>
            <ImageSplitSectionRenderer content={beyondContent}/>
            <CallToAction {...callToAction}/>
        </>
    );
}
