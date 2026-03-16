import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { redisGetScores, type QuizTopic } from "@/lib/redis";

function parseTopic(t: string | null): QuizTopic {
  if (t === "nationalism") return "nationalism";
  return "industriella";
}

export async function GET(request: Request) {
  const cookieStore = await cookies();
  const userId = cookieStore.get("quiz_user_id")?.value;
  if (!userId) {
    return NextResponse.json({ scores: [] });
  }
  const { searchParams } = new URL(request.url);
  const topic = parseTopic(searchParams.get("topic"));
  const scores = await redisGetScores(userId, topic);
  return NextResponse.json({ scores });
}
