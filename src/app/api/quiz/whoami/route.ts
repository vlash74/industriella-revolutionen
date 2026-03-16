import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("quiz_user_id")?.value ?? null;
  return NextResponse.json({ userId });
}
