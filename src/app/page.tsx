import {Hero} from "@/components/pages/home/Hero";
import {FeaturedProjects} from "@/components/pages/home/FeaturedProjects";
import {StackOverview} from "@/components/pages/home/StackOverview";
import {CallToAction} from "@/components/shared/CallToAction";
import {ShortAboutMe} from "@/components/pages/home/ShortAboutMe";
import {callToAction} from "@/data/home";

export default function Home() {
    return (
        <>
            <Hero/>
            <FeaturedProjects/>
            <StackOverview/>
            <ShortAboutMe/>
            <CallToAction {...callToAction} />
        </>
    );
}
