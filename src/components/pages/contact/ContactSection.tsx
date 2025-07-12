import {ContactForm} from "@/components/pages/contact/ContactForm";
import {contactFormContent, contactLinksContent} from "@/data/contact";
import Link from "next/link";
import Image from "next/image";

export const ContactSection = () => {
    return (
        <section className="
            w-full items-center justify-between flex flex-col md:flex-row
            px-10 py-8 md:px-20 md:py-12 xl:px-36 xl:py-16 gap-16 bg-background-variant"
        >
            <div className="flex flex-col items-center justify-center w-full gap-8">
                <h1 className="text-3xl md:text-4xl font-regular">
                    {contactLinksContent.heading}
                </h1>

                <div className="flex flex-col gap-4">
                    {contactLinksContent.contactLinks.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="flex flex-row items-center justify-start gap-2.5"
                        >
                            <Image
                                alt={item.name}
                                src={item.iconUrl}
                                width={24}
                                height={24}
                                unoptimized
                                className="w-9 h-9"
                                style={{ filter: 'var(--icon-filter)' }}
                            />

                            <p className="text-xl text-muted">
                                {item.label}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>

            <ContactForm {...contactFormContent}/>


        </section>
    )
}