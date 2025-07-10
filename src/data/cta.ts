import { CallToActionProps } from "@/types/ui";
import { resolveAsset } from "@/utils/resolveAsset";

export const callToActionVariants: Record<string, CallToActionProps> = {
    home: {
        heading: "Interested in working together?",
        subheading: "Let's build something great.",
        imageUrl: resolveAsset("cta", "cta-home.jpg"),
        buttons: [
            {
                label: "Get in touch",
                linkHref: "contact",
                className: "",
            },
            {
                label: "View full portfolio",
                linkHref: "projects",
                className: "",
            },
        ],
        className: "items-start text-left",
    },

    about: {
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
    },

    projects: {
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
                linkHref: "contact",
                className: "border-accent-secondary hover:bg-accent-secondary-hover text-accent-secondary",
            },
        ],
        className: "items-end text-right",
    },
};
