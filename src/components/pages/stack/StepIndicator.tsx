import React from 'react';
import {StepIndicatorProps} from "@/types/ui";

export const StepIndicator = ({
                                  value = 0,
                                  maxSteps = 5,
                                  className = '',
                                  barWidth = 4,
                                  barHeight = 2,
                                  spacing = 2,
                                  filledColor = 'bg-accent',
                                  emptyColor = 'bg-muted',
                              }: StepIndicatorProps) => {
    const clampedValue = Math.max(0, Math.min(maxSteps, value));
    const fullBars = Math.floor(clampedValue);
    const hasHalfBar = clampedValue % 1 >= 0.5;
    const gap = `gap-${spacing}`;
    const dimensions = `w-${barWidth} h-${barHeight}`;

    const renderBar = (index: number) => {
        const isFullyFilled = index < fullBars;
        const isHalfFilled = index === fullBars && hasHalfBar;

        if (isHalfFilled) {
            return (
                <div
                    key={index}
                    className={`${dimensions} ${emptyColor} rounded-xs relative overflow-hidden`}
                >
                    <div
                        className={`absolute top-0 left-0 h-full w-1/2 ${filledColor}`}
                    />
                </div>
            );
        }

        const barColorClass = isFullyFilled ? filledColor : emptyColor;

        return (
            <div
                key={index}
                className={`${dimensions} ${barColorClass} rounded-xs`}
            />
        );
    };

    return (
        <div className={`inline-flex items-center ${gap} ${className}`}>
            {Array.from({ length: maxSteps }, (_, index) => renderBar(index))}
        </div>
    );
};