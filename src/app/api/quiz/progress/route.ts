import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { redisGetScores } from "@/lib/redis";

export async function GET() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("quiz_user_id")?.value;
  if (!userId) {
    return NextResponse.json({ scores: [] });
  }
  const scores = await redisGetScores(userId);
  return NextResponse.json({ scores });
}
