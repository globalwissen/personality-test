/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

interface QuestionCardProps {
  question: string;
  questionNumber: number;
  onAnswer: (value: number) => void;
  active: boolean; // whether the user can interact
  selectedValue?: number | null;
  agreeColor?: string;
  neutralColor?: string;
  disagreeColor?: string;
}

const QuestionCard = ({
  question,
  questionNumber,
  onAnswer,
  active,
  selectedValue = null,
  agreeColor = "teal-500",
  neutralColor = "amber-400",
  disagreeColor = "red-500",
}: QuestionCardProps) => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const options = [
    { value: 3, type: "agree", size: "large" },
    { value: 2, type: "agree", size: "medium" },
    { value: 1, type: "agree", size: "small" },
    { value: 0, type: "neutral", size: "neutral" },
    { value: -1, type: "disagree", size: "small" },
    { value: -2, type: "disagree", size: "medium" },
    { value: -3, type: "disagree", size: "large" },
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "w-14 h-14 md:w-16 md:h-16";
      case "medium":
        return "w-12 h-12 md:w-14 md:h-14";
      case "small":
        return "w-10 h-10 md:w-12 md:h-12";
      case "neutral":
        return "w-8 h-8 md:w-10 md:h-10";
      default:
        return "w-12 h-12";
    }
  };

  const getCircleColor = (
    type: "agree" | "neutral" | "disagree",
    value: number
  ) => {
    const isSelected = selectedValue === value;
    const isHovered = hoveredValue === value;

    switch (type) {
      case "agree":
        return isSelected || isHovered
          ? `bg-${agreeColor} border-${agreeColor}`
          : `border-${agreeColor} bg-white`;
      case "neutral":
        return isSelected || isHovered
          ? `bg-${neutralColor} border-${neutralColor}`
          : `border-${neutralColor} bg-white`;
      case "disagree":
        return isSelected || isHovered
          ? `bg-${disagreeColor} border-${disagreeColor}`
          : `border-${disagreeColor} bg-white`;
      default:
        return "border-gray-300 bg-white";
    }
  };

  const handleSelect = (value: number) => {
    if (!active) return;
    onAnswer(value);
  };

  return (
    <div
      className={`bg-white rounded-2xl shadow-md p-4 md:p-6 w-full transition-all duration-300 ${
        !active ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      {/* Question number */}
      <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
        Question {questionNumber}
      </div>

      {/* Question text */}
      <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-6">
        {question}
      </h2>

      {/* Circles */}
      <div className="flex items-center justify-between space-x-2 md:space-x-4">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => handleSelect(opt.value)}
            onMouseEnter={() => active && setHoveredValue(opt.value)}
            onMouseLeave={() => setHoveredValue(null)}
            className={`${getSizeClasses(
              opt.size
            )} rounded-full border-2 flex items-center justify-center transition-all duration-200 ${getCircleColor(
              opt.type as any,
              opt.value
            )}`}
          >
            {(selectedValue === opt.value || hoveredValue === opt.value) && (
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        ))}
      </div>

      {/* Labels */}
      <div className="flex justify-between mt-3 text-gray-700 font-medium text-sm">
        <span className="flex-1 text-left">Agree</span>
        <span className="flex-1 text-center">Neutral</span>
        <span className="flex-1 text-right">Disagree</span>
      </div>
    </div>
  );
};

export default QuestionCard;
