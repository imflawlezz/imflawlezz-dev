import {resolveAsset} from "@/utils/resolveAsset";
import {Stack, Tool} from "@/types/stack";

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
                    iconUrl: resolveAsset('stack', 'nextjs.png'),
                },
                {
                    name: "TypeScript",
                    description: "Strictly typed code is my standard — TypeScript helps me catch issues early while building scalable apps.",
                    proficiency: 4,
                    iconUrl: resolveAsset('stack', 'ts.png'),
                },
                {
                    name: "Tailwind CSS",
                    description: "I use Tailwind CSS almost instinctively — it’s my preferred way to build clean, consistent, and responsive UIs.",
                    proficiency: 5,
                    iconUrl: resolveAsset('stack', 'tailwindcss.png'),
                },
                {
                    name: "React",
                    description: "Though I don’t use React directly much, it’s the foundation of Next.js — so I’m fully comfortable with its core concepts.",
                    proficiency: 4.5,
                    iconUrl: resolveAsset('stack', 'react.png'),
                },
                {
                    name: "JavaScript",
                    description: "I’m equally confident writing in plain JavaScript — it complements my TypeScript usage and expands compatibility.",
                    proficiency: 4,
                    iconUrl: resolveAsset('stack', 'js.png'),
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
                    iconUrl: resolveAsset('stack', 'express.png'),
                },
                {
                    name: "MongoDB",
                    description: "As part of my journey into full-stack development, I’m exploring MongoDB as a flexible, modern NoSQL database.",
                    proficiency: 1,
                    iconUrl: resolveAsset('stack', 'mongodb.png'),
                },
                {
                    name: "Swift",
                    description: "To develop native apps across Apple platforms, I’ve started learning Swift — a step toward full native mobile development.",
                    proficiency: 1.5,
                    iconUrl: resolveAsset('stack', 'swift.png'),
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
                    iconUrl: resolveAsset('stack', 'java.png'),
                },
                {
                    name: "C++",
                    description: "I use C++ primarily to program microcontrollers in my DIY hardware projects.",
                    proficiency: 3,
                    iconUrl: resolveAsset('stack', 'cpp.png'),
                },
                {
                    name: "HTML",
                    description: "HTML is the foundation of the web — I know it thoroughly and treat it as second nature.",
                    proficiency: 5,
                    iconUrl: resolveAsset('stack', 'html.png'),
                },
                {
                    name: "CSS",
                    description: "CSS was one of the first tools I mastered, and it continues to be a key part of my frontend work alongside Tailwind.",
                    proficiency: 5,
                    iconUrl: resolveAsset('stack', 'css.png'),
                },
                {
                    name: "Angular",
                    description: "Angular was the first framework I explored. While it felt complex at first, I appreciated its component-based philosophy.",
                    proficiency: 2.5,
                    iconUrl: resolveAsset('stack', 'angular.png'),
                },
                {
                    name: "Android Framework",
                    description: "I’ve worked with the Android Framework in university and personal projects — it’s one of the reasons I love Java so much.",
                    proficiency: 3.5,
                    iconUrl: resolveAsset('stack', 'android.png'),
                }
            ]
        }
    ]
}

export const toolsContent: {
    heading: string,
    subheading: string,
    tools: Tool[]
} = {
    heading: "Tools I Use",
    subheading: "My day-to-day tools for development, version control, and deployment.",
    tools: [
        {
            name: "WebStorm",
            iconUrl: resolveAsset('tools', 'webstorm.png'),
            description: "IDE",
            href: "https://www.jetbrains.com/webstorm"
        },
        {
            name: "Zed",
            iconUrl: resolveAsset('tools', 'zed.png'),
            description: "Text editor",
            href: "https://zed.dev"
        },
        {
            name: "Arc",
            iconUrl: resolveAsset('tools', 'arc.png'),
            description: "Web-browser",
            href: "https://arc.net/"
        },
        {
            name: "Warp",
            iconUrl: resolveAsset('tools', 'warp.png'),
            description: "Terminal",
            href: "https://www.warp.dev/"
        },
        {
            name: "GitHub",
            iconUrl: resolveAsset('tools', 'github.png'),
            description: "Version control",
            href: "https://github.com/"
        },
        {
            name: "Vercel",
            iconUrl: resolveAsset('tools', 'vercel.png'),
            description: "Deployment",
            href: "https://vercel.com/"
        },
        {
            name: "Docker",
            iconUrl: resolveAsset('tools', 'docker.png'),
            description: "Containers",
            href: "https://www.docker.com/"
        }
    ]
}