export type PersonalityTrait = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";

export interface Question {
  id: number;
  text: string;
  trait: PersonalityTrait;
  reverse?: boolean;
}

export interface Answer {
  questionId: number;
  value: number; // -3 to +3 (Disagree to Agree)
}

export interface PersonalityResult {
  type: string;
  traits: {
    energy: number; // I vs E
    mind: number; // S vs N
    nature: number; // T vs F
    tactics: number; // J vs P
  };
}
