import { useState } from "react";
import { ProgressBar } from "../components/progressbar";
import QuestionCard from "../components/questioncard";
import { sampleQuestions } from "../data/data";
import type { Answer } from "../types/personality";

interface TestPageProps {
  onComplete: (answers: Answer[]) => void;
}

const TestPage: React.FC<TestPageProps> = ({ onComplete }) => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (questionIndex: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = {
      questionId: sampleQuestions[questionIndex].id,
      value,
    };
    setAnswers(newAnswers);

    // Unlock next question if available
    if (
      questionIndex === currentQuestion &&
      currentQuestion < sampleQuestions.length - 1
    ) {
      setCurrentQuestion(currentQuestion + 1);
    }

    // Complete test
    if (newAnswers.length === sampleQuestions.length) {
      const allAnswered = newAnswers.every((a) => a !== undefined);
      if (allAnswered) onComplete(newAnswers as Answer[]);
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 bg-gray-50">
      <div className="w-full  mb-12 flex flex-col justify-around items-center">
        <p className=" text-5xl">Personality Test </p>
        <p className="text-xl">Discover your personality type and category.</p>
      </div>
      <div className="container mx-auto max-w-4xl space-y-6">
        <ProgressBar
          current={answers.filter((a) => a !== undefined).length}
          total={sampleQuestions.length}
          className="mb-4"
        />

        {sampleQuestions.map((q, index) => (
          <QuestionCard
            key={q.id}
            question={q.text}
            questionNumber={index + 1}
            active={index <= currentQuestion}
            selectedValue={answers[index]?.value ?? null}
            onAnswer={(value) => handleAnswer(index, value)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestPage;
