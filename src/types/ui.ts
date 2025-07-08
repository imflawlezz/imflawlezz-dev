export interface ButtonProps {
    label: string;
    onClick?: () => void;
    linkHref?: string;
    className?: string;
    isPrimary?: boolean;
}