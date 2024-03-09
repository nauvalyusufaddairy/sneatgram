import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: Response) {
  const { sd } = await req.json();
  return NextResponse.json({ sd });
}
