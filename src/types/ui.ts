export type ButtonProps = {
    label: string;
    onClick?: () => void;
    linkHref?: string;
    className?: string;
    isPrimary?: boolean;
}

export type BadgeProps = {
    label: string;
    className?: string;
}

export type LinkComponentProps = {
    label: string;
    href: string;
    className?: string;
}