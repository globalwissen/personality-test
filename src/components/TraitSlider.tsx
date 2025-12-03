import React from "react";

interface TraitSliderProps {
  leftTrait: string;
  rightTrait: string;
  value: number; // -100 to 100
  leftColor: string;
  rightColor: string;
}

export const TraitSlider: React.FC<TraitSliderProps> = ({
  leftTrait,
  rightTrait,
  value,
  leftColor,
  rightColor,
}) => {
  const percentage = ((value + 100) / 200) * 100;
  const isLeft = value < 0;
  const displayValue = Math.abs(value);

  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-3">
        <div
          className={`font-bold ${isLeft ? "text-gray-800" : "text-gray-400"}`}
        >
          {leftTrait}
        </div>
        <div className="text-sm font-semibold text-gray-600">
          {displayValue}%
        </div>
        <div
          className={`font-bold ${!isLeft ? "text-gray-800" : "text-gray-400"}`}
        >
          {rightTrait}
        </div>
      </div>
      <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`absolute h-full transition-all duration-700 ${
            isLeft ? leftColor : rightColor
          }`}
          style={{
            left: isLeft ? `${percentage}%` : "50%",
            right: isLeft ? "50%" : `${100 - percentage}%`,
          }}
        />
        <div
          className="absolute w-6 h-6 bg-white rounded-full shadow-lg top-1/2 -translate-y-1/2 transition-all duration-700"
          style={{ left: `calc(${percentage}% - 12px)` }}
        />
      </div>
    </div>
  );
};
