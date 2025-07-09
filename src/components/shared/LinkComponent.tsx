import Link from "next/link";
import {LinkComponentProps} from "@/types/ui";
import {ArrowDownRightIcon} from "@heroicons/react/24/outline";

export const LinkComponent = ({
    label,
    href,
    className
}:LinkComponentProps) => {
    return (
        <Link
            href={href}
            className={`${className} font-bold text-accent hover:text-accent-hover text-lg md:text-xl 2xl:text-2xl
            flex flex-row items-center gap-2`}
        >
            {label}
            <ArrowDownRightIcon className="w-5 h-5 lg:stroke-3" />
        </Link>
    )
}