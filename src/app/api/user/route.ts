import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    console.log(process.env.POSTGRES_URL);
    const result = await prisma.user.findMany();

    return NextResponse.json({ users: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
