import {resolveAsset} from "@/utils/resolveAsset";
import {Project} from "@/types/project";

export const projectsData : Project[] = [
    {
        id: 1,
        title: 'Grovemade',
        technologies: ['Next.js', 'Tailwind CSS', 'Typescript', 'PET project'],
        description: "Grovemade landing. The Desk Shelf System.",
        fullDescription: [""],
        imageUrl: resolveAsset('projects', 'grovemade.jpeg'),
        githubUrl: "https://github.com/imflawlezz/grovemade-landing",
        liveUrl: "https://grovemade-landing.vercel.app/",
        features: ['Responsive layout', 'Simple component-based structure'],
        devComment: "",
        screenshots: [
            resolveAsset('screenshots', `01_1.png`),
            resolveAsset('screenshots', `01_2.png`),
            resolveAsset('screenshots', `01_3.png`),
        ]
    },
    {
        id: 2,
        title: 'Dudeshape',
        technologies: ['Next.js', 'Tailwind CSS', 'Typescript', 'PET project'],
        description: "Dudeshape landing. Modern furniture",
        fullDescription: [""],
        imageUrl: resolveAsset('projects', 'dudeshape.jpeg'),
        githubUrl: "https://github.com/imflawlezz/dudeshape-landing",
        liveUrl: "https://dudeshape-landing.vercel.app/",
        features: ['Responsive layout', 'Slightly better component-based structure'],
        devComment: "",
        screenshots: [
            resolveAsset('screenshots', `02_1.png`),
            resolveAsset('screenshots', `02_2.png`),
            resolveAsset('screenshots', `02_3.png`),
            resolveAsset('screenshots', `02_4.png`),
        ]
    },
    {
        id: 3,
        title: 'Roby',
        technologies: ['Next.js', 'Tailwind CSS', 'Typescript', 'PET project'],
        description: "Roby landing. A creative agency based in Helsinki.",
        fullDescription: [""],
        imageUrl: resolveAsset('projects', 'roby.jpeg'),
        githubUrl: "https://github.com/imflawlezz/roby-landing",
        liveUrl: "https://roby-landing-delta.vercel.app/",
        features: ['Responsive layout', 'Component-based structure', 'Advanced animations using "motion"'],
        devComment: "",
        screenshots: [
            resolveAsset('screenshots', `03_1.png`),
            resolveAsset('screenshots', `03_2.png`),
            resolveAsset('screenshots', `03_3.png`),
            resolveAsset('screenshots', `03_4.png`),
            resolveAsset('screenshots', `03_5.png`),
        ]
    },
    {
        id: 4,
        title: 'Latte Cafe',
        technologies: ['Next.js', 'Tailwind CSS', 'Typescript', 'PET project'],
        description: "Latte Cafe Landing. Award winning cafe and bar.",
        fullDescription: [""],
        imageUrl: resolveAsset('projects', 'latte-cafe.png'),
        githubUrl: "https://github.com/imflawlezz/latte-cafe-landing",
        liveUrl: "https://latte-cafe-landing.vercel.app/",
        features: ['Responsive layout', 'Slightly better component-based structure'],
        devComment: "",
        screenshots: [
            resolveAsset('screenshots', `04_1.png`),
            resolveAsset('screenshots', `04_2.png`),
            resolveAsset('screenshots', `04_3.png`),
            resolveAsset('screenshots', `04_4.png`),
        ]
    },
    {
        id: 5,
        title: 'Woodendot',
        technologies: ['Next.js', 'Tailwind CSS', 'Typescript', 'PET project'],
        description: "Woodendot landing. Furniture designed to live in harmony, creating distinctive and timeless spaces.",
        fullDescription: [""],
        imageUrl: resolveAsset('projects', 'woodendot.jpeg'),
        githubUrl: "https://github.com/imflawlezz/woodendot-landing",
        liveUrl: "https://woodendot-nine.vercel.app/",
        features: ['Responsive layout', 'Slightly better component-based structure'],
        devComment: "",
        screenshots: [
            resolveAsset('screenshots', `05_1.png`),
            resolveAsset('screenshots', `05_2.png`),
            resolveAsset('screenshots', `05_3.png`),
            resolveAsset('screenshots', `05_4.png`),
            resolveAsset('screenshots', `05_5.png`)
        ]
    },
    {
        id: 6,
        title: 'Wishbone',
        technologies: ['Next.js', 'Tailwind CSS', 'Typescript', 'PET project'],
        description: "Wishbone+Partners landing. The home of beautiful architecture.",
        fullDescription: [""],
        imageUrl: resolveAsset('projects', 'wishbone.jpeg'),
        githubUrl: "https://github.com/imflawlezz/wishbone-landing",
        liveUrl: "https://wishbone-landing.vercel.app/",
        features: ['Responsive layout', 'Slightly better component-based structure'],
        devComment: "",
        screenshots: [
            resolveAsset('screenshots', `06_1.png`),
            resolveAsset('screenshots', `06_2.png`),
            resolveAsset('screenshots', `06_3.png`),
            resolveAsset('screenshots', `06_4.png`)
        ]
    },
    {
        id: 7,
        title: 'imflawlezz.dev',
        technologies: ['Next.js', 'Tailwind CSS', 'Typescript'],
        description: "Imflawlezz.dev. My portfolio website. You are currently viewing it.",
        fullDescription:
            ["So the idea of this site was to show all my work, together with skills an short story of mine.",
            "I put a lot of time and effort to make this site look good and have all the necessary functionality.",],
        imageUrl: resolveAsset('projects', 'imflawlezz.jpg'),
        githubUrl: "https://github.com/imflawlezz/imflawlezz-dev",
        liveUrl: "https://imflawlezz.dev/",
        features: ['Responsive layout', 'Slightly better component-based structure'],
        devComment: "Has literally everything that can be here XD",
        screenshots: [
            resolveAsset('screenshots', `07_1.png`),
            resolveAsset('screenshots', `07_2.png`),
            resolveAsset('screenshots', `07_3.png`),
            resolveAsset('screenshots', `07_4.png`),
            resolveAsset('screenshots', `07_5.png`),
            resolveAsset('screenshots', `07_6.png`),
        ]
    },

]