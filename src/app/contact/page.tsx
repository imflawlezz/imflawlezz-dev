import {heroContent} from "@/data/contact";
import {Hero} from "@/components/shared/Hero";
import {ContactSection} from "@/components/pages/contact/ContactSection";

export default function About() {
    return (
        <>
            <Hero {...heroContent}/>
            <ContactSection/>
        </>
    );
}
