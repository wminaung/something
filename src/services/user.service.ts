import { prisma } from "@/lib/db";

// TODO - GET method

export const getAll = async <T>(args: T) => {
  return prisma.user.findMany(args as any);
};

export const getUnique = async <T>(args: T) => {
  return await prisma.user.findUnique(args as any);
};
export const getFirst = async <T>(args: T) => {
  return await prisma.user.findFirst(args as any);
};
// * ******************************** * //

// TODO - POST method

const createOne = async <T>(args: T) => {
  return await prisma.user.create(args as any);
};

const createMany = async <T>(args: T) => {
  return await prisma.user.createMany(args as any);
};
// * ******************************** * //

// TODO - PUT method

const updateMany = async <T>(args: T) => {
  return await prisma.user.updateMany(args as any);
};

const updateOne = async <T>(args: T) => {
  return await prisma.user.update(args as any);
};
// * ******************************** * //

// TODO - DELETE method

const deleteMany = async <T>(args: T) => {
  return await prisma.user.deleteMany(args as any);
};

const deleteOne = async <T>(args: T) => {
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
