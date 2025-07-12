'use client';

import {SectionHeading} from "@/components/shared/SectionHeading";
import {journeyContent} from "@/data/about";
import {motion} from "motion/react";
import {useScrollDirection} from "@/hooks/useScrollDirection"; // импорт кастомного хука

export const Timeline = () => {
    const scrollDirection = useScrollDirection();

    return (
        <section className="w-full px-16 md:px-36 py-18 lg:py-24 flex flex-col gap-9 lg:gap-24 items-center justify-center">
            <SectionHeading heading={journeyContent.heading}/>

            <div className="max-w-4xl md:max-w-7xl text-muted text-lg flex flex-col gap-4">
                {journeyContent.paragraph.map((paragraph, index) => (
                    <p key={index}>{paragraph.text}</p>
                ))}
            </div>

            <div className="relative flex flex-col md:flex-row gap-5 items-start md:justify-between">
                {journeyContent.milestones.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: scrollDirection === 'down' ? 20 : -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeOut',
                            delay: 0.05 * idx
                        }}
                        viewport={{ once: false, amount: 1 }}
                        className="relative z-10 flex flex-row md:flex-col items-center gap-10 md:gap-4 md:text-center"
                    >
                        <div className={`
                            relative w-7 h-7 md:w-6 md:h-6 rounded-full flex items-center justify-center 
                            ${idx === journeyContent.milestones.length - 1
                            ? 'bg-muted animate-pulse'
                            : 'bg-accent-secondary'}
                        `}>
                            <div className="w-5.5 h-5.5 md:w-4.5 md:h-4.5 rounded-full bg-background flex items-center justify-center">
                                <div className="w-2.5 h-2.5 md:w-1.5 md:h-1.5 rounded-full bg-foreground"/>
                            </div>
                        </div>

                        <div className="max-w-36 text-base flex flex-col items-start md:items-center gap-1">
                            <h2 className="text-foreground text-2xl">{item.year}</h2>
                            <p className="text-muted text-xl md:text-lg">{item.label}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
