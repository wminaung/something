import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    console.log(process.env.POSTGRES_URL);
    // const result = await prisma.user.findMany();
    const result = { hello: "World" };
    // const result = await prisma.user.create({
    //   data: {
    //     email: "minwin243@gmail.com",
    //     name: "Win Min Aung",
    //   },
    // });
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
