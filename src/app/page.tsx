import {Hero} from "@/components/pages/home/Hero";
import {FeaturedProjects} from "@/components/pages/home/FeaturedProjects";
import {StackOverview} from "@/components/pages/home/StackOverview";
import {CallToAction} from "@/components/shared/CallToAction";
import {callToActionVariants} from "@/data/cta";

export default function Home() {
    return (
        <>
            <Hero/>
            <FeaturedProjects/>
            <StackOverview/>
            <CallToAction {...callToActionVariants.home} />
        </>
    );
}
