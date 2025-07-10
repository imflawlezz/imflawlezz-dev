import {Hero} from "@/components/pages/home/Hero";
import {FeaturedProjects} from "@/components/pages/home/FeaturedProjects";
import {StackOverview} from "@/components/pages/home/StackOverview";
import {CallToAction} from "@/components/shared/CallToAction";
import {callToActionVariants} from "@/data/cta";
import {ShortAboutMe} from "@/components/pages/home/ShortAboutMe";

export default function Home() {
    return (
        <>
            <Hero/>
            <FeaturedProjects/>
            <StackOverview/>
            <ShortAboutMe/>
            <CallToAction {...callToActionVariants.home} />
        </>
    );
}
