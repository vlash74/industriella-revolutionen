import type { QuizTopic } from "./redis";

/** Tolka topic från query/body (API och klient). */
export function parseQuizTopic(t: string | null | undefined): QuizTopic {
  switch (t) {
    case "nationalism":
      return "nationalism";
    case "industriella-inst":
      return "industriella-inst";
    case "nationalism-inst":
      return "nationalism-inst";
    default:
      return "industriella";
  }
}
