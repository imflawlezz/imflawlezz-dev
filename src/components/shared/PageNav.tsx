'use client';

import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon, HomeIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import {PageNavProps} from "@/types/ui";
import {projectPageNavContent} from "@/data/layout";

export const PageNav = ({
    mainLink,
    prevLink,
    nextLink,
    className = ''
}: PageNavProps) => {
    return (
        <nav
            className={clsx(
                'flex flex-col items-center md:items-start gap-4 w-full underline-offset-2',
                className
            )}
        >
            <Link href={mainLink.href} className="flex items-center justify-self-center gap-2 text-foreground hover:underline">
                <HomeIcon className="w-5 h-5" />
                <span>{mainLink.label ? mainLink.label : projectPageNavContent.home}</span>
            </Link>

            <div className=" w-full flex flex-row justify-between items-center">
                {prevLink ? (
                    <Link href={prevLink.href} className="flex text-left items-center gap-2 text-accent hover:underline">
                        <ArrowLeftIcon className="w-5 h-5" />
                        <span>{projectPageNavContent.prev} {prevLink.label && `(${prevLink.label})`}</span>
                    </Link>
                ) : <span className="invisible">.</span>}

                {nextLink ? (
                    <Link href={nextLink.href} className="flex text-right items-center gap-2 text-accent hover:underline">
                        <span>{projectPageNavContent.next} {nextLink.label && `(${nextLink.label})`}</span>
                        <ArrowRightIcon className="w-5 h-5" />
                    </Link>
                ) : <span className="invisible">.</span>}
            </div>

        </nav>
    );
};
