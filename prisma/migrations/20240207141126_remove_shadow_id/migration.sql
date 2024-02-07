/*
  Warnings:

  - You are about to drop the column `shadowId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `shadowId` on the `ProductAsset` table. All the data in the column will be lost.
  - You are about to drop the column `shadowId` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "shadowId";

-- AlterTable
ALTER TABLE "ProductAsset" DROP COLUMN "shadowId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "shadowId";
