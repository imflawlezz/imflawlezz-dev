export type ContactFormProps = {
    heading: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    buttonPlaceholder: string;
    className?: string;
}

export type ContactSectionProps = {
    contactLinksContent: {
        heading: string;
        contactLinks: {
            name: string;
            label: string;
            href: string;
            icon: string;
        }[]
    },
    contactFormContent: {
        heading: string;
        namePlaceholder: string;
        emailPlaceholder: string;
        messagePlaceholder: string;
        buttonPlaceholder: string;
        className?: string;
    }
}