export type AnswerValue = "A" | "B"; // simple two-choice per question

export interface Question {
  id: string;
  text: string;
  axis: "EI" | "SN" | "TF" | "JP"; // which dichotomy it affects
  // A choice favors the first letter, B favors the second
  // We'll keep choices simple (Agree/Disagree) and map A->first letter, B->second
}
