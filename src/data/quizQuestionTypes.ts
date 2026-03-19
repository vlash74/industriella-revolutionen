/** Gemensam typ för flervalsfrågor (industriella + nationalism + instudering). */
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  tip?: string;
}
