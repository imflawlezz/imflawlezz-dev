'use client';
import Link from "next/link";
import {useParams} from "next/navigation";

export const Logo = () => {
    const locale = useParams()?.locale || 'en';
    return (
        <Link
            href={'/'+locale}
            className="font-sans text-lg sm:text-xl md:text-2xl">
                imflawlezz
                    <span
                        className="font-bold text-accent">
                        .dev
                    </span>
        </Link>
    )
}