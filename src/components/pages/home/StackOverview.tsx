import {SectionHeading} from "@/components/ui/SectionHeading";
import {LinkComponent} from "@/components/ui/LinkComponent";
import {stackOverviewContent} from "@/data/home";
import Image from "next/image";

export const StackOverview = () => {
    return (
        <section className="py-6 gap-8 md:py-12 md:gap-16 flex flex-col items-center">
            <SectionHeading heading={stackOverviewContent.heading} />

            <div className='flex flex-wrap justify-center md:flex-row gap-8 md:gap-12 px-16 '>
                {stackOverviewContent.stack.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2.5">
                        <Image
                            alt={item.name}
                            src={item.iconUrl}
                            width={64}
                            height={64}
                            className="object-contain object-center w-16 h-16 p-1"
                        />
                        <span className="font-medium text-sm text-muted">{item.name}</span>
                    </div>
                ))}
            </div>

            <LinkComponent
                label={stackOverviewContent.linkContent.label}
                href={stackOverviewContent.linkContent.href}
            />
        </section>
    )
}