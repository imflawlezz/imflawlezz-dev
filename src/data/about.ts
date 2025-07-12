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
        { year: '2025', label: "And that's only the beginning..." },
    ]
}