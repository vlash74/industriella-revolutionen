import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { redisGetScores } from "@/lib/redis";
import { parseQuizTopic } from "@/lib/parseQuizTopic";

export async function GET(request: Request) {
  const cookieStore = await cookies();
  const userId = cookieStore.get("quiz_user_id")?.value;
  if (!userId) {
    return NextResponse.json({ scores: [] });
  }
  const { searchParams } = new URL(request.url);
  const topic = parseQuizTopic(searchParams.get("topic"));
  const scores = await redisGetScores(userId, topic);
  return NextResponse.json({ scores });
}
