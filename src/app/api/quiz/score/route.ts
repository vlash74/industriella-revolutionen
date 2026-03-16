import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { redisSaveScore } from "@/lib/redis";

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const userId = cookieStore.get("quiz_user_id")?.value;
  if (!userId) {
    return NextResponse.json({ error: "Ange namn eller kod först" }, { status: 401 });
  }
  let body: { score: number; total: number };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ogiltig body" }, { status: 400 });
  }
  const { score, total } = body;
  if (typeof score !== "number" || typeof total !== "number" || total < 1) {
    return NextResponse.json({ error: "score och total krävs" }, { status: 400 });
  }
  const scores = await redisSaveScore(userId, score, total);
  return NextResponse.json({ scores });
}
