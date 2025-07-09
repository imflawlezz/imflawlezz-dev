import {BadgeProps} from "@/types/ui";

export const Badge = ({
    label,
    className
}:BadgeProps) => {
    return (
        <div className={`${className} text-white bg-accent-secondary px-2 py-1 inline-block rounded-md`}>
            <span>
                {label}
            </span>
        </div>
    )
}