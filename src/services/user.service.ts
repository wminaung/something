import { prisma } from "@/lib/db";

// TODO - GET method

const getAll = async <T>(args: T) => {
  return prisma.user.findMany(args as any);
};

const getUnique = async <T>(args: T) => {
  return await prisma.user.findUnique(args as any);
};
export const getFirst = async <T>(args: T) => {
  return await prisma.user.findFirst(args as any);
};
// * ******************************** * //

// TODO - POST method

export const createOne = async <T>(args: T) => {
  return await prisma.user.create(args as any);
};

export const createMany = async <T>(args: T) => {
  return await prisma.user.createMany(args as any);
};
// * ******************************** * //

// TODO - PUT method

export const updateMany = async <T>(args: T) => {
  return await prisma.user.updateMany(args as any);
};

export const updateOne = async <T>(args: T) => {
  return await prisma.user.update(args as any);
};
// * ******************************** * //

// TODO - DELETE method

export const deleteMany = async <T>(args: T) => {
  return await prisma.user.deleteMany(args as any);
};

export const deleteOne = async <T>(args: T) => {
  return await prisma.user.delete(args as any);
};

export const userService = {
  createOne,
  createMany,
  updateMany,
  updateOne,
  deleteMany,
  deleteOne,
  getAll,
  getFirst,
  getUnique,
};
