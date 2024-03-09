import { NextResponse } from "next/server";

export function GET(req: Request) {
  const time = new Date();

  return NextResponse.json({ server_time: time }, { status: 200 });
}
