import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { redisGetQuestionHistory, type QuizTopic } from "@/lib/redis";

function parseTopic(t: string | null): QuizTopic {
  if (t === "nationalism") return "nationalism";
  return "industriella";
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ questionId: string }> }
) {
  const { questionId } = await params;
  const cookieStore = await cookies();
  const userId = cookieStore.get("quiz_user_id")?.value;
  if (!userId) {
    return NextResponse.json({ history: [] });
  }
  const { searchParams } = new URL(request.url);
  const topic = parseTopic(searchParams.get("topic"));
  const history = await redisGetQuestionHistory(userId, topic, questionId);
  return NextResponse.json({ history });
}
