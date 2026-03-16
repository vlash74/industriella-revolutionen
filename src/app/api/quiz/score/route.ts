import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { redisSaveScore, type QuizTopic } from "@/lib/redis";

function parseTopic(t: string | null | undefined): QuizTopic {
  if (t === "nationalism") return "nationalism";
  return "industriella";
}

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const userId = cookieStore.get("quiz_user_id")?.value;
  if (!userId) {
    return NextResponse.json({ error: "Ange namn eller kod först" }, { status: 401 });
  }
  let body: { score: number; total: number; topic?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ogiltig body" }, { status: 400 });
  }
  const { score, total, topic: topicParam } = body;
  if (typeof score !== "number" || typeof total !== "number" || total < 1) {
    return NextResponse.json({ error: "score och total krävs" }, { status: 400 });
  }
  const topic = parseTopic(topicParam);
  const scores = await redisSaveScore(userId, topic, score, total);
  return NextResponse.json({ scores });
}
