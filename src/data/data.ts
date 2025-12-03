import type { Question } from "../types/personality";

export const sampleQuestions: Question[] = [
  { id: 1, text: "You regularly make new friends.", trait: "E" },
  {
    id: 2,
    text: "You often get so lost in thoughts that you ignore or forget your surroundings.",
    trait: "N",
  },
  {
    id: 3,
    text: "You try to respond to your emails as soon as possible.",
    trait: "J",
  },
  {
    id: 4,
    text: "You find it easy to stay relaxed and focused even when there is some pressure.",
    trait: "T",
  },
  {
    id: 5,
    text: "You rarely do something just out of curiosity.",
    trait: "N",
    reverse: true,
  },
];

export const personalityTypes = [
  {
    type: "INTJ",
    title: "The Architect",
    description:
      "Imaginative and strategic thinkers with a plan for everything.",
    color: "bg-purple-500",
  },
  {
    type: "INTP",
    title: "The Logician",
    description:
      "Innovative inventors with an unquenchable thirst for knowledge.",
    color: "bg-purple-400",
  },
  {
    type: "ENTJ",
    title: "The Commander",
    description: "Bold, imaginative and strong-willed leaders.",
    color: "bg-purple-600",
  },
  {
    type: "ENTP",
    title: "The Debater",
    description:
      "Smart and curious thinkers who cannot resist an intellectual challenge.",
    color: "bg-purple-500",
  },
];
