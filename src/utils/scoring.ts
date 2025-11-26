import type { AnswerValue } from "../types";

type AxisResult = {
  EI: number; // positive = E, negative = I
  SN: number; // positive = S, negative = N
  TF: number; // positive = T, negative = F
  JP: number; // positive = J, negative = P
};

export function initialAxis(): AxisResult {
  return { EI: 0, SN: 0, TF: 0, JP: 0 };
}

/**
 * answerMap: A means leaning first letter (E,S,T,J), B means second (I,N,F,P)
 * We'll add +1 for A, -1 for B on that axis.
 */
export function scoreAnswers(
  answers: Record<string, AnswerValue>,
  questionMap: { [id: string]: { axis: string } }
) {
  const axis = initialAxis();

  for (const qId of Object.keys(answers)) {
    const val = answers[qId];
    const axisKey = questionMap[qId].axis as keyof AxisResult;
    if (!axisKey) continue;
    if (val === "A") axis[axisKey] += 1;
    else axis[axisKey] -= 1;
  }

  // Build type
  const letter = (a: keyof AxisResult, first: string, second: string) =>
    axis[a] >= 0 ? first : second;

  const type = `${letter("EI", "E", "I")}${letter("SN", "S", "N")}${letter(
    "TF",
    "T",
    "F"
  )}${letter("JP", "J", "P")}`;

  // Map to your categories:
  const entrepreneur = ["ENTJ", "ENTP", "ESTP", "ESFP", "ESTJ"];
  const techpreneur = ["INTJ", "INTP", "ISTP", "ISFP", "ISTJ"];
  const intrapreneur = ["ENFJ", "ENFP", "INFJ", "INFP", "ISFJ"];

  let category: "entrepreneur" | "techpreneur" | "intrapreneur" =
    "entrepreneur";
  if (techpreneur.includes(type)) category = "techpreneur";
  else if (intrapreneur.includes(type)) category = "intrapreneur";
  else if (entrepreneur.includes(type)) category = "entrepreneur";
  else category = "entrepreneur";

  // Also compute strength percentages per axis for display
  const percent = {
    E: Math.round(axis.EI >= 0 ? 50 + axis.EI * 10 : 50 + axis.EI * 10),
    S: Math.round(axis.SN >= 0 ? 50 + axis.SN * 10 : 50 + axis.SN * 10),
    T: Math.round(axis.TF >= 0 ? 50 + axis.TF * 10 : 50 + axis.TF * 10),
    J: Math.round(axis.JP >= 0 ? 50 + axis.JP * 10 : 50 + axis.JP * 10),
  };

  return { type, category, axis, percent };
}
