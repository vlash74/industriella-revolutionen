const SCORES_KEY = "industriella_quiz_scores";
const HISTORY_KEY = "industriella_quiz_question_history";
const MAX_HISTORY_PER_QUESTION = 5;

export interface SavedScore {
  date: string;
  score: number;
  total: number;
}

export function getScores(): SavedScore[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(SCORES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as SavedScore[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveScore(score: number, total: number): SavedScore[] {
  const scores = getScores();
  const next: SavedScore = {
    date: new Date().toISOString(),
    score,
    total,
  };
  const updated = [next, ...scores].slice(0, 50);
  try {
    localStorage.setItem(SCORES_KEY, JSON.stringify(updated));
  } catch {}
  return updated;
}

/** Senaste först (index 0 = senast) */
export function getQuestionHistory(questionId: string): boolean[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    const all = JSON.parse(raw) as Record<string, boolean[]>;
    const arr = all[questionId];
    return Array.isArray(arr) ? arr.slice(0, MAX_HISTORY_PER_QUESTION) : [];
  } catch {
    return [];
  }
}

export function saveQuestionResult(questionId: string, correct: boolean): boolean[] {
  const all = getQuestionHistoryMap();
  const prev = all[questionId] ?? [];
  const updated = [correct, ...prev].slice(0, MAX_HISTORY_PER_QUESTION);
  all[questionId] = updated;
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(all));
  } catch {}
  return updated;
}

function getQuestionHistoryMap(): Record<string, boolean[]> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, boolean[]>;
    return typeof parsed === "object" && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}
