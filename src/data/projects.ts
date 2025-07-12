import {resolveAsset} from "@/utils/resolveAsset";

export const heroContent = {
    heading: "My projects",
    subheading: "A collection of things I’ve built — from full-stack apps to DIY hardware devices. Some are passion projects, others are learning experiments, all of them taught me something new.",
    imageUrl: resolveAsset('hero', 'hero-projects.jpg')
};

export const callToAction = {
    heading: "Want to know more about how I built these?",
    subheading: "Let’s talk — or check out my GitHub for more.",
    imageUrl: resolveAsset("cta", "cta-projects.jpg"),
    buttons: [
        {
            label: "View GitHub",
            linkHref: "https://github.com/imflawlezz",
            className: "bg-accent-secondary hover:bg-accent-secondary-hover",
        },
        {
            label: "Contact me",
            linkHref: "/contact",
            className: "border-accent-secondary hover:bg-accent-secondary-hover text-accent-secondary",
        },
    ],
    className: "items-end text-right",
}