'use client';
import {toolsContent} from "@/data/stack";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {useScrollDirection} from "@/hooks/useScrollDirection";

export const ToolsGrid = () => {
    const scrollDirection = useScrollDirection();
    return (
        <div className="flex flex-col items-start md:items-center gap-9 text-left md:text-center">
            <div className="flex flex-col gap-4 items-center justify-center w-full md:max-w-4xl">
                <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-semibold">
                    {toolsContent.heading}
                </h1>
                <p className="text-xl md:text-2xl text-muted">
                    {toolsContent.subheading}
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-10">
                {toolsContent.tools.map((tool, index) => (
                    <motion.div
                        initial={{opacity: 0, y: scrollDirection === 'down' ? -20 : 20}}
                        whileInView={{ opacity: 1, y: 0}}
                        viewport={{ once: false, amount: 0.8 }}
                        transition={{
                            duration: 0.6,
                            ease: 'easeOut',
                            delay: 0.05 * index,
                        }}
                        key={index}
                    >
                        <Link
                            href={tool.href}
                            className="flex flex-row md:flex-col gap-8 md:gap-4 items-center
                            hover:scale-110 transition-all duration-200"
                        >
                            <Image
                                src={tool.iconUrl}
                                alt={tool.name}
                                width={48}
                                height={48}
                                className={``}
                            />

                            <div>
                                <h3>
                                    {tool.name}
                                </h3>
                                <p>
                                    {tool.description}
                                </p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}