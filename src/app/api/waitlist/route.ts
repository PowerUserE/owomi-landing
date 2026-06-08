import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    console.error("GOOGLE_SCRIPT_URL is not set");
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const res = await fetch(scriptUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, timestamp: new Date().toISOString() }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to save" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
