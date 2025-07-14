import {Logo} from "@/components/ui/Logo";
import Link from "next/link";
import {LastUpdated} from "@/components/ui/LastUpdated";
import {LanguageSwitcher} from "@/components/ui/LanguageSwitcher";
import {EnvelopeIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import {FooterLink, FooterProps, NavItem} from "@/types/layout";
import {localizedPath} from "@/utils/localizedPath";
import {resolveAsset} from "@/utils/resolveAsset";

export const Footer = ({
    navItems,
    footerLinks,
    footer,
    locale
}: FooterProps) => {
    return (
        <section className="flex flex-col px-12 sm:px-16 md:px-24 lg:px-36 xl:px-48 py-12 items-start justify-center gap-9">
            <Logo/>

            <div className="flex w-full flex-col gap-16 lg:gap-0 lg:flex-row justify-between items-start">
                <div className="flex flex-col gap-6">
                    <h1 className="font-heading text-lg font-medium">{footer.sitemapTitle}</h1>
                    <div className="flex flex-col gap-3">
                        {navItems.map((item: NavItem, index: number) => (
                            <Link
                                key={index}
                                href={localizedPath(locale, item.href)}
                                className="hover:text-accent-secondary transition-all duration-300"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <h1 className="font-heading text-lg font-medium">{footer.sitemapTitle}</h1>
                    <div className="flex flex-col gap-4">
                        <p className="text-muted">
                            {footer.infoQuote}
                        </p>
                            {footer.locationNote}

                        <Link
                            href={"https://example.com"}
                            className="text-accent-secondary hover:text-accent-secondary-hover transition-all
                            duration-300 underline underline-offset-4"
                        >
                            {footer.downloadCv}
                        </Link>

                        <LastUpdated/>

                        <LanguageSwitcher/>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <h1 className="font-heading text-lg font-medium">{footer.contactTitle}</h1>
                    <div className="flex flex-col gap-6">
                        <div className="">
                            <Link
                                href={'mailto:imflawlezz13@gmail.com'}
                                className="flex flex-row gap-2 items-center hover:text-accent-secondary transition-all duration-300"
                            >
                                <EnvelopeIcon className="w-6 h-6"/>
                                {footer.email}
                            </Link>
                        </div>

                        <div className="flex flex-row gap-5 items-start">
                            {footerLinks.map((item: FooterLink, index: number) => (
                                <Link
                                    key={index}
                                    href={item.linkHref}
                                >
                                    <Image
                                        alt={item.label}
                                        src={resolveAsset('icons', item.icon)}
                                        width={24}
                                        height={24}
                                        unoptimized
                                        className="hover:scale-125 transition-all duration-300"
                                        style={{ filter: 'var(--icon-filter)' }}
                                    />
                                </Link>
                            ))}
                        </div>

                        <span>
                             {footer.madeWith} <Link
                                                href="https://nextjs.org/"
                                                className="text-accent-secondary underline font-bold">
                                                    {footer.madeWithTech}
                                            </Link>
                        </span>
                    </div>
                </div>
            </div>

            <span className="self-center text-center">
                {footer.copyright}
            </span>
        </section>
    )
}