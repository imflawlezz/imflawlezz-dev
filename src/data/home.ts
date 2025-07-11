import {resolveAsset} from "@/utils/resolveAsset";

export const heroContent = {
    heading: [
        { text: "Hi, I'm Egor —", br: true },
        { text: 'a ', br: false },
        { text: 'frontend developer', className: 'text-accent'},
        { text: ',', br: true },
        { text: 'student', className: 'text-accent-secondary' },
        { text: ',', br: true },
        { text: 'tech tinkerer', className: 'text-attention', prefix: 'and '},
        { text: '.' },
    ],

    paragraph: [
        { text: "I build modern, responsive websites and explore the world of full-stack development."},
        { text: "When I’m not coding interfaces, I prototype mobile apps and create DIY smart devices powered by microcontrollers."},
        { text: "Always learning, always building."},
    ],

    buttons: [
        {
            label: "See my work",
            linkHref: "projects",
        },
        {
            label: "Get in touch",
            linkHref: "contacts",
            isPrimary: false
        }
    ]
};

export const featuredProjectContent = {
    heading: "Featured Projects",
    linkContent: {
        label: "View all projects",
        href: "projects"
    }
}

export const stackOverviewContent = {
    heading: "Stack Overview",
    stack: [
        {
            name: "Next.js",
            iconUrl: resolveAsset('icons', 'nextjs.png'),
        },
        {
            name: "Typescript",
            iconUrl: resolveAsset('icons', 'typescript.png'),
        },
        {
            name: "Tailwind",
            iconUrl: resolveAsset('icons', 'tailwind.png'),
        },
        {
            name: "JavaScript",
            iconUrl: resolveAsset('icons', 'javascript.png'),
        },
        {
            name: "React",
            iconUrl: resolveAsset('icons', 'react.png'),
        },
    ],
    linkContent: {
        label: "See complete tech stack",
        href: "stack"
    }
}
