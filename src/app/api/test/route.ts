import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { Prisma, User } from "../../../../prisma/generated/client";

import { parse } from "url";
import { userService } from "@/services/user.service";

export const GET = async (req: NextRequest) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        name: "Win Min Aung",
        email: "minwin243@gmail.com",
      },
    });

    return NextResponse.json(newUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
