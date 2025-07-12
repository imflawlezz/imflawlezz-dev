import {resolveAsset} from "@/utils/resolveAsset";
import {Stack} from "@/types/stack";

export const heroContent = {
    heading: "Tech Stack",
    subheading: "Here's a look at the technologies I work with most often, what I'm currently learning, and what I’ve explored along the way. I aim to build things that are fast, scalable, and intuitive — and I believe the right tools make all the difference.",
    imageUrl: resolveAsset('hero', 'hero-stack.jpg')
};

export const stackDetails: Stack = {
    categories: [
        {
            heading: "Core Technologies",
            description: "Technologies I use regularly and feel confident with.",
            technologies: [
                {
                    name: "Next.js",
                    description: "My go-to framework for web development",
                    proficiency: 4.5,
                    iconUrl: resolveAsset('icons', 'nextjs.png'),
                },
                {
                    name: "TypeScript",
                    description: "Strictly typed code is my standard — TypeScript helps me catch issues early while building scalable apps.",
                    proficiency: 4,
                    iconUrl: resolveAsset('icons', 'ts.png'),
                },
                {
                    name: "Tailwind CSS",
                    description: "I use Tailwind CSS almost instinctively — it’s my preferred way to build clean, consistent, and responsive UIs.",
                    proficiency: 5,
                    iconUrl: resolveAsset('icons', 'tailwindcss.png'),
                },
                {
                    name: "React",
                    description: "Though I don’t use React directly much, it’s the foundation of Next.js — so I’m fully comfortable with its core concepts.",
                    proficiency: 4.5,
                    iconUrl: resolveAsset('icons', 'react.png'),
                },
                {
                    name: "JavaScript",
                    description: "I’m equally confident writing in plain JavaScript — it complements my TypeScript usage and expands compatibility.",
                    proficiency: 4,
                    iconUrl: resolveAsset('icons', 'js.png'),
                }
            ]
        },
        {
            heading: "Currently Learning",
            description: "Technologies I’m currently exploring to go full-stack.",
            technologies: [
                {
                    name: "Express",
                    description: "I’m learning Express to build full-stack apps and better understand backend fundamentals.",
                    proficiency: 1,
                    iconUrl: resolveAsset('icons', 'express.png'),
                },
                {
                    name: "MongoDB",
                    description: "As part of my journey into full-stack development, I’m exploring MongoDB as a flexible, modern NoSQL database.",
                    proficiency: 1,
                    iconUrl: resolveAsset('icons', 'mongodb.png'),
                },
                {
                    name: "Swift",
                    description: "To develop native apps across Apple platforms, I’ve started learning Swift — a step toward full native mobile development.",
                    proficiency: 1.5,
                    iconUrl: resolveAsset('icons', 'swift.png'),
                }
            ]
        },
        {
            heading: "Also Familiar With",
            description: "Technologies I’ve worked with in academic or side projects.",
            technologies: [
                {
                    name: "Java",
                    description: "My favorite programming language. I studied it for over a year at university and still enjoy writing in it.",
                    proficiency: 3.5,
                    iconUrl: resolveAsset('icons', 'java.png'),
                },
                {
                    name: "C++",
                    description: "I use C++ primarily to program microcontrollers in my DIY hardware projects.",
                    proficiency: 3,
                    iconUrl: resolveAsset('icons', 'cpp.png'),
                },
                {
                    name: "HTML",
                    description: "HTML is the foundation of the web — I know it thoroughly and treat it as second nature.",
                    proficiency: 5,
                    iconUrl: resolveAsset('icons', 'html.png'),
                },
                {
                    name: "CSS",
                    description: "CSS was one of the first tools I mastered, and it continues to be a key part of my frontend work alongside Tailwind.",
                    proficiency: 5,
                    iconUrl: resolveAsset('icons', 'css.png'),
                },
                {
                    name: "Angular",
                    description: "Angular was the first framework I explored. While it felt complex at first, I appreciated its component-based philosophy.",
                    proficiency: 2.5,
                    iconUrl: resolveAsset('icons', 'angualr.png'),
                },
                {
                    name: "Android Framework",
                    description: "I’ve worked with the Android Framework in university and personal projects — it’s one of the reasons I love Java so much.",
                    proficiency: 3.5,
                    iconUrl: resolveAsset('icons', 'android.png'),
                }
            ]
        }
    ]
}