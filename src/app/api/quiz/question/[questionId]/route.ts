import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { redisGetQuestionHistory } from "@/lib/redis";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ questionId: string }> }
) {
  const { questionId } = await params;
  const cookieStore = await cookies();
  const userId = cookieStore.get("quiz_user_id")?.value;
  if (!userId) {
    return NextResponse.json({ history: [] });
  }
  const history = await redisGetQuestionHistory(userId, questionId);
  return NextResponse.json({ history });
}
