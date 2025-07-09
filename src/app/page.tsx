import {Hero} from "@/components/pages/home/Hero";
import {FeaturedProjects} from "@/components/pages/home/FeaturedProjects";
import {StackOverview} from "@/components/pages/home/StackOverview";

export default function Home() {
    return (
        <>
            <Hero/>
            <FeaturedProjects/>
            <StackOverview/>
        </>
    );
}
