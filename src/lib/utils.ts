import { Prisma, ProductAsset } from "../../prisma/generated/client";
import { prisma } from "./db";

export const getProductAssets = async (): Promise<ProductAsset[]> => {
  const data = await prisma.productAsset.findMany();
  return data;
};
