import React from 'react';

export const StepIndicator = ({
                           value = 0,
                           maxSteps = 5,
                           className = "",
                       }) => {
    const clampedValue = Math.max(0, Math.min(maxSteps, value));

    const fullBars = Math.floor(clampedValue);
    const hasHalfBar = clampedValue % 1 >= 0.5;

    const renderBar = (index: number) => {
        const isFullyFilled = index < fullBars;
        const isHalfFilled = index === fullBars && hasHalfBar;

        if (isHalfFilled) {
            return (
                <div
                    key={index}
                    className={`w-4 h-2 bg-muted rounded-xs transition-all duration-200 relative overflow-hidden`}
                >
                    <div
                        className={`absolute top-0 left-0 h-full w-1/2 bg-accent transition-all duration-200`}
                    />
                </div>
            );
        }

        const barColorClass = isFullyFilled ? 'bg-accent' : 'bg-muted';

        return (
            <div
                key={index}
                className={`w-4 h-2 ${barColorClass} rounded-xs transition-colors duration-200`}
            />
        );
    };

    return (
        <div className={`inline-flex items-center gap-2 ${className}`}>
            {Array.from({ length: maxSteps }, (_, index) => renderBar(index))}
        </div>
    );
};