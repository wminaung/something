import { prisma } from "@/lib/db";
import { RedirectType, redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { Prisma } from "../../../../prisma/generated/client";
import { getProductAssets } from "@/lib/utils";

export async function GET(request: Request) {
  try {
    const data = await getProductAssets();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
