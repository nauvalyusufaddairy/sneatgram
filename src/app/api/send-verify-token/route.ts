import prisma from "@/lib/dbConnect";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { email, token } = await req.json();
  try {
    const data = await prisma.verificationToken.create({
      data: {
        email,
        expires: new Date(),
        token,
      },
    });
    return NextResponse.json({ data }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ e }, { status: 500 });
  }
}
