import { Redis } from "@upstash/redis";

/** Prefix för alla quiz-nycklar så samma Redis-databas kan delas med andra projekt. */
const KEY_PREFIX =
  (process.env.QUIZ_REDIS_PREFIX || "ir-quiz:").replace(/:?$/, ":");

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

const redis = getRedis();

export function getRedisClient(): Redis | null {
  return redis;
}

export type QuizTopic =
  | "industriella"
  | "nationalism"
  | "industriella-inst"
  | "nationalism-inst";

export function scoresKey(userId: string, topic: QuizTopic): string {
  return `${KEY_PREFIX}quiz:${userId}:${topic}:scores`;
}

export function questionKey(
  userId: string,
  topic: QuizTopic,
  questionId: string
): string {
  return `${KEY_PREFIX}quiz:${userId}:${topic}:q:${questionId}`;
}

const MAX_SCORES = 50;
const MAX_QUESTION_HISTORY = 5;

export interface SavedScore {
  date: string;
  score: number;
  total: number;
}

export async function redisGetScores(
  userId: string,
  topic: QuizTopic
): Promise<SavedScore[]> {
  const client = getRedisClient();
  if (!client) return [];
  try {
    const raw = await client.get(scoresKey(userId, topic));
    if (raw == null) return [];
    const parsed: unknown = Array.isArray(raw) ? raw : JSON.parse(String(raw));
    return Array.isArray(parsed) ? (parsed as SavedScore[]) : [];
  } catch {
    return [];
  }
}

export async function redisSaveScore(
  userId: string,
  topic: QuizTopic,
  score: number,
  total: number
): Promise<SavedScore[]> {
  const client = getRedisClient();
  if (!client) return [];
  const scores = await redisGetScores(userId, topic);
  const next: SavedScore = {
    date: new Date().toISOString(),
    score,
    total,
  };
  const updated = [next, ...scores].slice(0, MAX_SCORES);
  await client.set(scoresKey(userId, topic), JSON.stringify(updated));
  return updated;
}

export async function redisGetQuestionHistory(
  userId: string,
  topic: QuizTopic,
  questionId: string
): Promise<boolean[]> {
  const client = getRedisClient();
  if (!client) return [];
  try {
    const list = await client.lrange(
      questionKey(userId, topic, questionId),
      0,
      MAX_QUESTION_HISTORY - 1
    );
    if (!Array.isArray(list)) return [];
    return list.map((v) => String(v) === "1");
  } catch {
    return [];
  }
}

export async function redisSaveQuestionResult(
  userId: string,
  topic: QuizTopic,
  questionId: string,
  correct: boolean
): Promise<boolean[]> {
  const client = getRedisClient();
  if (!client) return [];
  const key = questionKey(userId, topic, questionId);
  await client.lpush(key, correct ? "1" : "0");
  await client.ltrim(key, 0, MAX_QUESTION_HISTORY - 1);
  return redisGetQuestionHistory(userId, topic, questionId);
}
