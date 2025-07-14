'use client';
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import {HeaderProps} from "@/types/layout";



export const Header = ({
    navItems,
    locale,
}: HeaderProps) => {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-5 sm:px-10 md:px-12 lg:px-18 2xl:px-32 py-3 md:py-5 bg-background/90">
            <Logo />

            <nav className="hidden md:flex items-center gap-6">
                {navItems.map(item => (
                    <Link
                        key={item.href}
                        href={`/${locale}${item.href}`}
                        className="hover:text-accent transition"
                    >
                        {item.label}
                    </Link>
                ))}
                <ThemeToggle />
            </nav>

            <button className="md:hidden p-2 text-foreground" onClick={() => setMenuOpen(true)}>
                <Bars3Icon className="h-7 w-7" />
            </button>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-[var(--background)] flex flex-col items-center justify-center gap-6
                        p-6 md:hidden"
                    >
                        <button onClick={() => setMenuOpen(false)} className="absolute top-3 right-6 p-2">
                            <XMarkIcon className="h-7 w-7" />
                        </button>

                        {navItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.3, delay: 0.1 * index }}
                            >
                                <Link
                                    href={`/${locale}${item.href}`}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-xl"
                                >
                                    {item.label}
                                </Link>
                            </motion.div>

                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{
                                duration: 0.3,
                                delay: 0.8,
                                ease: "easeOut"
                            }}
                            className="flex flex-col items-center gap-8"
                        >
                            <ThemeToggle/>
                            <LanguageSwitcher/>
                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
