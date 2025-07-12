import {resolveAsset} from "@/utils/resolveAsset";

export const heroContent = {
    heading: "Get in touch",
    subheading: "Whether you have a question, want to start a project, or just want to say hi —  I’d love to hear from you.",
    imageUrl: resolveAsset('hero', 'hero-contact.jpg')
};

export const contactLinksContent = {
    heading: "Contact",
    contactLinks: [
        {
            name: "Telegram",
            label: "@imflawlezz",
            href: "https://telegram.me/",
            iconUrl: resolveAsset('icons', 'telegram.svg')
        },
        {
            name: "Email",
            label: "imflawlezz13@gmail.com",
            href: "https://telegram.me/",
            iconUrl: resolveAsset('icons', 'envelope.svg')
        },
        {
            name: "GitHub",
            label: "github.com/imflawlezz",
            href: "https://telegram.me/",
            iconUrl: resolveAsset('icons', 'github.svg')
        },
        {
            name: "LinkedIn",
            label: "linkedin.com/in/imflawlezz13",
            href: "https://telegram.me/",
            iconUrl: resolveAsset('icons', 'linkedin.svg')
        },

    ]
}

export const contactFormContent = {
    heading: "Leave a message",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    messagePlaceholder: "Your message",
    buttonPlaceholder: "Send"
};

