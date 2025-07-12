import {callToAction, heroContent} from "@/data/projects";
import {Hero} from "@/components/shared/Hero";
import {CallToAction} from "@/components/shared/CallToAction";
import {ProjectsGrid} from "@/components/pages/projects/ProjectGrid";

export default function About() {
    return (
        <>
            <Hero {...heroContent}/>
            <ProjectsGrid/>
            <CallToAction {...callToAction}/>
        </>
    );
}
