import {Hero} from "@/components/shared/Hero";
import {heroContent} from "@/data/stack";
import {StackSection} from "@/components/pages/stack/StackSection";

export default function About() {
    return (
        <>
            <Hero {...heroContent}/>
            <StackSection/>
        </>
    );
}
