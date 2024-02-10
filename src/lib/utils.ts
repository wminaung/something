import { Session } from "next-auth";
import { Prisma, ProductAsset } from "../../prisma/generated/client";
import { prisma } from "./db";
import { userService } from "@/services/user.service";

export const getProductAssets = async (): Promise<ProductAsset[]> => {
  const data = await prisma.productAsset.findMany();
  return data;
};
export const googleCallbackMiddleware = async (session: Session) => {
  if (!session.user) return;
  const { email, image, name } = session.user;
  if (!email || !name) return;

  const isUserExist = await prisma.user.findUnique({ where: { email: email } });

  if (!isUserExist) {
    await userService.createOne<Prisma.UserCreateArgs>({
      data: {
        name,
        email,
        image,
      },
    });
  }
};
