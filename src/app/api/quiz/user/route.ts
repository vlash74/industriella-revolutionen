import { NextResponse } from "next/server";
import { cookies } from "next/headers";

function slugify(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "") || "anvandare";
}

export async function POST(request: Request) {
  let body: { name?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ogiltig body" }, { status: 400 });
  }
  const name = typeof body.name === "string" ? body.name : "";
  const userId = slugify(name);
  if (!userId) {
    return NextResponse.json({ error: "Ange ett namn eller kod" }, { status: 400 });
  }
  const cookieStore = await cookies();
  cookieStore.set("quiz_user_id", userId, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 år
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  return NextResponse.json({ userId });
}
