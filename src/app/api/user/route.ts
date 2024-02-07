import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { Prisma, User } from "../../../../prisma/generated/client";

import { parse } from "url";
import { userService } from "@/services/user.service";

export const GET = async (req: NextRequest) => {
  // Run inside async function

  try {
    const { query } = parse(req.url, true);
    const argsStr = query.args as string;
    let users: User[] = [];
    try {
      const argsJson = JSON.parse(argsStr) as Prisma.UserFindManyArgs;
      const args = Prisma.validator<Prisma.UserFindManyArgs>()(argsJson);
      console.log(args);
      users = await userService.getAll<Prisma.UserFindManyArgs>(args);
    } catch (error) {
      console.log({ error });
      users = await userService.getAll<Prisma.UserFindManyArgs>({});
    }

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const args = (await req.json()) as Prisma.UserCreateArgs;

    const newUser = await userService.createOne<Prisma.UserCreateArgs>(args);
    return NextResponse.json(newUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};

export const PUT = async (req: NextRequest) => {
  try {
    const args = (await req.json()) as Prisma.UserUpdateArgs;

    const updatedUser = await userService.createOne(args);
    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const args = (await req.json()) as Prisma.UserUpdateArgs;

    const updatedUser = await userService.createOne(args);
    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
