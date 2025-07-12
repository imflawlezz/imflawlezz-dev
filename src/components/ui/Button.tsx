import {ButtonProps} from "@/types/ui";
import Link from "next/link";

export const Button = ({
    label,
    onClick,
    linkHref,
    className,
    isPrimary = true
}:ButtonProps) => {
    return (
        <Link
            href={linkHref ? `${linkHref}` : `#`}
            onClick={onClick}
            className={`${className} p-3 md:px-6 md:py-3 text-base text-center rounded-xl transition duration-300 ease-in-out
                ${isPrimary ? 'text-white bg-accent hover:bg-accent-hover' : 
                'text-accent bg-transparent hover:text-white hover:bg-accent-hover hover:border-accent-hover border-accent border-1'}
            `}
        >
            {label}
        </Link>
    )
}