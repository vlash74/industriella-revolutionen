import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { redisSaveQuestionResult, type QuizTopic } from "@/lib/redis";

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
  let body: { questionId: string; correct: boolean; topic?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ogiltig body" }, { status: 400 });
  }
  const { questionId, correct, topic: topicParam } = body;
  if (!questionId || typeof correct !== "boolean") {
    return NextResponse.json({ error: "questionId och correct krävs" }, { status: 400 });
  }
  const topic = parseTopic(topicParam);
  const history = await redisSaveQuestionResult(userId, topic, questionId, correct);
  return NextResponse.json({ history });
}
