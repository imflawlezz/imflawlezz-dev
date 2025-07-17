import clsx from "clsx";
import Image from "next/image";
import {StepIndicator} from "@/components/pages/stack/StepIndicator";
import {StackGridProps} from "@/types/stack";
import {resolveAsset} from "@/utils/resolveAsset";

export const StackGrid = ({
    stackDetails,
}:StackGridProps) => {
    return (
        <div className="flex flex-col gap-16 md:gap-20 lg:gap-24 2xl:gap-28">
            {stackDetails.category.map((category, index) => (
                <div
                    key={index}
                    className={
                        clsx('w-full flex flex-col gap-12 lg:gap-24 2xl:gap-32 items-start',
                            index % 2 === 0
                                ? 'md:flex-row'
                                : 'md:flex-row-reverse'
                        )
                    }
                >
                    <div className={
                        clsx(
                            'w-full flex flex-col gap-4',
                            index % 2 === 0
                                ? 'items-end text-right'
                                : 'items-start text-left'
                        )
                    }>
                        <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-semibold">
                            {category.heading}
                        </h1>
                        <p className="text-xl md:text-2xl 2xl:text-3xl text-muted max-w-[450px]">
                            {category.description}
                        </p>
                    </div>

                    <div className="flex flex-col gap-2.5 items-start w-full">
                        {category.technology.map((technology, index) => (
                            <div
                                key={index}
                                className="flex flex-row items-start justify-center p-2.5 gap-4"
                            >
                                <Image
                                    alt={technology.name}
                                    src={resolveAsset('stack', technology.image)}
                                    width={48}
                                    height={48}
                                    className={``}
                                    style={{ filter: 'var(--icon-filter)' }}
                                />

                                <div className="flex flex-col gap-2.5">
                                    <div className="flex flex-row items-center justify-start gap-6">
                                        <p className="text-xl lg:text-2xl ">{technology.name}</p>
                                        <StepIndicator value={technology.proficiency}/>
                                    </div>

                                    <p className="text-sm lg:text-base text-muted max-w-[450px]">
                                        {technology.description}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}