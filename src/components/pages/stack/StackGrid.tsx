import {stackDetails} from "@/data/stack";
import clsx from "clsx";
import Image from "next/image";

export const StackGrid = () => {
    return (
        <div className="">
            {stackDetails.categories.map((category, index) => (
                // Category
                <div
                    key={index}
                    className={
                        clsx('flex flex-col gap-12 lg:gap-24 2xl:gap-32 items-center justify-start',
                            index % 2 === 0
                                ? 'flex-row'
                                : 'flex-row-reverse'
                        )
                    }
                >
                    (// Category heading and description)
                    <div className="flex flex-col gap-4 items-start">
                        <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-semibold">
                            {category.heading}
                        </h1>
                        <p className="text-xl md:text-2xl 2xl:text-3xl text-muted">
                            {category.description}
                        </p>
                    </div>
                    (// Stack item)
                    <div className="flex flex-col gap-2.5 items-start">
                        {category.technologies.map((technology, index) => (
                            <div
                                key={index}
                                className="flex flex-row items-start justify-center p-2.5 gap-4"
                            >
                                <Image
                                    alt={technology.name}
                                    src={technology.iconUrl}
                                    width={48}
                                    height={48}
                                    className={``}
                                />

                                <div className="flex flex-col gap-2.5">
                                    <div className="flex flex-row items-start justify-center gap-6">

                                    </div>

                                    <p className="text-base lg:text-lg 2xl:text-xl text-muted"></p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}