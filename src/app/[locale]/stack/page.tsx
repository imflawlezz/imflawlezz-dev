import {Hero} from "@/components/shared/Hero";
import {StackSection} from "@/components/pages/stack/StackSection";
import {getPageMessages} from "@/lib/i18n/getPageMessgaes";
import {StackMessages} from "@/types/i18n";
import {Locale} from "@/lib/i18n/config";

export default async function Stack({ params }: { params: { locale: Locale } }) {
    const t = (await getPageMessages(params.locale, 'stack')) as StackMessages;
    return (
        <>
            <Hero {...t.heroContent}/>
            <StackSection {...t.sectionContent}/>
        </>
    );
}
