import type { Question } from "../types";

export const questions: Question[] = [
  // EI (8 total)
  {
    id: "q1",
    text: "I feel energized when I am around many people.",
    axis: "EI",
  },
  {
    id: "q2",
    text: "I prefer to spend quiet time alone to recharge.",
    axis: "EI",
  },
  {
    id: "q3",
    text: "I enjoy meeting new people and starting conversations.",
    axis: "EI",
  },
  {
    id: "q4",
    text: "Large social gatherings often drain my energy.",
    axis: "EI",
  },

  // SN (6 total)
  {
    id: "q5",
    text: "I focus on concrete facts and practical details.",
    axis: "SN",
  },
  {
    id: "q6",
    text: "I enjoy imagining future possibilities and abstract ideas.",
    axis: "SN",
  },
  {
    id: "q7",
    text: "I prefer hands-on experience to theoretical discussion.",
    axis: "SN",
  },

  // TF (6 total)
  {
    id: "q8",
    text: "I base decisions mostly on logic and objective analysis.",
    axis: "TF",
  },
  {
    id: "q9",
    text: "I consider people's feelings and personal values when deciding.",
    axis: "TF",
  },
  {
    id: "q10",
    text: "I find it easy to critique ideas without taking it personally.",
    axis: "TF",
  },

  // JP (4 total)
  {
    id: "q11",
    text: "I like clear plans and predictable schedules.",
    axis: "JP",
  },
  {
    id: "q12",
    text: "I prefer to be spontaneous and keep options open.",
    axis: "JP",
  },

  // Extra balanced fillers
  {
    id: "q13",
    text: "I enjoy leading group tasks and organizing people.",
    axis: "EI",
  },
  {
    id: "q14",
    text: "I usually notice small details others miss.",
    axis: "SN",
  },
  {
    id: "q15",
    text: "I often put harmony and relationships above strict rules.",
    axis: "TF",
  },
  { id: "q16", text: "I like finishing tasks ahead of deadlines.", axis: "JP" },
  {
    id: "q17",
    text: "I feel comfortable speaking in front of a crowd.",
    axis: "EI",
  },
  {
    id: "q18",
    text: "I prefer conceptual frameworks to step-by-step instructions.",
    axis: "SN",
  },
  {
    id: "q19",
    text: "I value fairness and rules even when they are strict.",
    axis: "TF",
  },
  {
    id: "q20",
    text: "I tend to adapt my plans when new opportunities arise.",
    axis: "JP",
  },
  { id: "q21", text: "I enjoy debating ideas over small talk.", axis: "EI" },
  {
    id: "q22",
    text: "I trust intuitive impressions more than detailed data sometimes.",
    axis: "SN",
  },
  {
    id: "q23",
    text: "I find it easier to make decisions quickly based on facts.",
    axis: "TF",
  },
  {
    id: "q24",
    text: "I prefer having structure and closure for tasks.",
    axis: "JP",
  },
];
