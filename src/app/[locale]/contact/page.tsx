import {Hero} from "@/components/shared/Hero";
import {ContactSection} from "@/components/pages/contact/ContactSection";
import {Locale} from "@/lib/i18n/config";
import {getPageMessages} from "@/lib/i18n/getPageMessgaes";
import {ContactMessages} from "@/types/i18n";

export default async function Contact({ params }: { params: { locale: Locale } }) {
    const t = (await getPageMessages(params.locale, 'contact')) as ContactMessages;
    return (
        <>
            <Hero {...t.heroContent}/>
            <ContactSection contactFormContent={t.contactFormContent} contactLinksContent={t.contactLinksContent}/>
        </>
    );
}
