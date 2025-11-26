import type { Question, AnswerValue } from "../types";

export default function QuestionCard({
  question,
  value,
  onChange,
}: {
  question: Question;
  value?: AnswerValue;
  onChange: (val: AnswerValue) => void;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow px-6">
      <p className="text-lg font-medium mb-4">{question.text}</p>

      <div className="flex gap-3">
        <label
          className={`flex-1 p-3 border rounded cursor-pointer ${
            value === "A" ? "bg-[#003058] text-white" : ""
          }`}
        >
          <input
            type="radio"
            name={question.id}
            className="hidden"
            checked={value === "A"}
            onChange={() => onChange("A")}
          />
          <div className="text-sm font-medium">A</div>
          <div className="text-xs">Agree / Lean toward statement</div>
        </label>

        <label
          className={`flex-1 p-3 border rounded cursor-pointer ${
            value === "B" ? "bg-[#003058] text-white" : ""
          }`}
        >
          <input
            type="radio"
            name={question.id}
            className="hidden"
            checked={value === "B"}
            onChange={() => onChange("B")}
          />
          <div className="text-sm font-medium">B</div>
          <div className="text-xs">Disagree / Lean away from statement</div>
        </label>
      </div>
    </div>
  );
}
