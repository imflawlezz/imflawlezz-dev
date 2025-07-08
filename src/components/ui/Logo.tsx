import Link from "next/link";

export const Logo = () => {
    return (
        <Link
            href="/"
            className="font-sans text-lg sm:text-xl md:text-2xl">
                imflawlezz
                    <span
                        className="font-bold text-accent">
                        .dev
                    </span>
        </Link>
    )
}