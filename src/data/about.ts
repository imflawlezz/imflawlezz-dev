import {resolveAsset} from "@/utils/resolveAsset";

export const heroContent = {
    heading: "About Me",
    subheading: "A developer, maker and lifelong learner. I’m passionate about building not just websites, but ideas. This page is a bit more personal — here’s my story.",
    imageUrl: resolveAsset('hero', 'hero-about.jpg')
};

export const journeyContent = {
    heading: "My Journey",
    paragraph: [
        { text: "I started programming out of curiosity — fascinated by how interfaces work and how machines respond. Over time, that curiosity turned into a passion." },
        { text: "Now I study computer science in Poland and focus mainly on frontend development using React and Next.js. But on the side, I explore the world of embedded systems and BLE-based IoT projects." },
    ],
    milestones: [
        { year: '2017', label: 'Discovered HTML & CSS' },
        { year: '2018', label: 'Explored JavaScript' },
        { year: '2021', label: 'Discovered Bootstrap' },
        { year: '2023', label: 'Started CS Degree' },
        { year: '2024', label: 'Explored Web Frameworks' },
        { label: "And that's only the beginning..." },
    ]
}

export const valueContent = {
    heading: "What I value",
    reverse: false,
    imageUrl: resolveAsset('sections', 'value.jpeg'),
    paragraph: [
        "I believe great software is not just functional — it’s thoughtful.",
        "I care about clean code, accessibility, clear design, and a sense of purpose in every product I build.",
        "Whether it's a full-stack app or a hardware prototype, I strive to create things that feel good to use."
    ],
}

export const beyondContent = {
    heading: "Beyond Code",
    reverse: true,
    imageUrl: resolveAsset('sections', 'beyond-code.jpeg'),
    paragraph: [
        "Outside of development, I enjoy exploring Japanese culture, tinkering with DIY electronics, and occasionally designing my own devices from scratch.",
        "I believe that creativity and curiosity go hand in hand — whether it's building a new device or learning a new language."
    ],
}

export const callToAction = {
    heading: "Want to connect or collaborate?",
    subheading: "Let’s talk. I’m always happy to meet curious minds.",
    imageUrl: resolveAsset("cta", "cta-about.jpg"),
    buttons: [
        {
            label: "Get in Touch",
            linkHref: "contact",
            className: "",
        },
    ],
    className: "items-center text-center",
}