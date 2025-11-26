import { useMemo, useState } from "react";
import { questions } from "../data/data";
import QuestionCard from "../components/questioncard";
import ProgressBar from "../components/progressbar";
import { scoreAnswers } from "../utils/scoring";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function TestPage() {
  // map questions by id for quick access
  const questionMap = useMemo(() => {
    const m: Record<string, { axis: string }> = {};
    for (const q of questions) m[q.id] = { axis: q.axis };
    return m;
  }, []);

  const total = questions.length;
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, "A" | "B">>({});
  const nav = useNavigate();

  const currentQ = questions[index];

  const setAnswer = (val: "A" | "B") => {
    setAnswers((s) => ({ ...s, [currentQ.id]: val }));
  };

  const handleNext = () => {
    if (!answers[currentQ.id]) {
      toast.error("Please pick an answer");
      return;
    }
    setIndex((i) => Math.min(i + 1, total - 1));
  };

  const handlePrev = () => setIndex((i) => Math.max(i - 1, 0));

  const handleSubmit = () => {
    // ensure all answered
    if (Object.keys(answers).length !== total) {
      toast.error("Please answer all questions before submitting");
      return;
    }

    const result = scoreAnswers(answers, questionMap);
    // Save result to local storage or send to backend
    localStorage.setItem("lastResult", JSON.stringify(result));
    // optionally call backend to save student category
    // axios.post('/student/personality-test', { type: result.type, category: result.category })

    nav("/result");
  };

  return (
    <div className="mt-6">
      <ProgressBar current={index + 1} total={total} />

      <QuestionCard
        question={currentQ}
        value={answers[currentQ.id]}
        onChange={setAnswer}
      />

      <div className="flex justify-between mt-4 px-6">
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Previous
        </button>
        {index < total - 1 ? (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-[#003058] text-white rounded"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
