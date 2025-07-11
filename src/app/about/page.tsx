import {Hero} from "@/components/shared/Hero";
import {heroContent} from "@/data/about";

export default function About() {
    return (
        <Hero
            heading={heroContent.heading}
            subheading={heroContent.subheading}
            imageUrl={heroContent.imageUrl}
        />

    );
}
