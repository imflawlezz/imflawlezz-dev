import {Hero} from "@/components/shared/Hero";
import {Timeline} from "@/components/pages/about/Timeline";
import {CallToAction} from "@/components/shared/CallToAction";
import {ImageSplitSectionRenderer} from "@/components/shared/ImageSplitSectionRenderer";
import {Locale} from "@/lib/i18n/config";
import {getPageMessages} from "@/lib/i18n/getPageMessgaes";
import {AboutMessages} from "@/types/i18n";

export default async function About({ params }: { params: { locale: Locale } }) {
    const t = (await getPageMessages(params.locale, 'about')) as AboutMessages;

    return (
        <>
            <Hero {...t.heroContent}/>
            <Timeline {...t.journeyContent} />
            <ImageSplitSectionRenderer {...t.valueContent} />
            <ImageSplitSectionRenderer {...t.beyondContent} />
            <CallToAction {...t.callToAction}/>
        </>
    );
}
