import { Locale } from "@/lib/i18n/config";
import { getPageMessages } from "@/lib/i18n/getPageMessgaes";
import { HomeMessages } from "@/types/i18n";

import { Hero } from "@/components/pages/home/Hero";
import { FeaturedProjects } from "@/components/pages/home/FeaturedProjects";
import { StackOverview } from "@/components/pages/home/StackOverview";
import { ShortAboutMe } from "@/components/pages/home/ShortAboutMe";
import { CallToAction } from "@/components/shared/CallToAction";
import { getLocalizedProjects } from "@/utils/getLocalizedProjects";

export default async function HomePage({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const t = (await getPageMessages(locale, "home")) as HomeMessages;
    const projects = await getLocalizedProjects(locale);

    return (
        <>
            <Hero {...t.hero} />
            <FeaturedProjects {...t.featuredProject} projects={projects} />
            <StackOverview {...t.stackOverview} />
            <ShortAboutMe {...t.aboutMe} />
            <CallToAction {...t.callToAction} />
        </>
    );
}
