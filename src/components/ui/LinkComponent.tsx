'use client'
import Link from "next/link";
import {LinkComponentProps} from "@/types/ui";
import {ArrowDownRightIcon} from "@heroicons/react/24/outline";
import {localizedPath} from "@/utils/localizedPath";
import {useParams} from "next/navigation";

export const LinkComponent = ({
    label,
    href,
    className
}:LinkComponentProps) => {
    const locale = useParams()?.locale || 'en';
    return (
        <Link
            href={localizedPath(locale, href)}
            className={`${className} font-bold text-accent hover:text-accent-hover text-lg md:text-xl
            flex flex-row items-center gap-2 transition-all duration-300`}
        >
            {label}
            <ArrowDownRightIcon className="w-5 h-5 lg:stroke-3" />
        </Link>
    )
}