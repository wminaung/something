/*
  Warnings:

  - You are about to drop the column `shadowId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `shadowId` on the `ProductAsset` table. All the data in the column will be lost.
  - You are about to drop the column `shadowId` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Product_shadowId_key";

-- DropIndex
DROP INDEX "ProductAsset_shadowId_key";

-- DropIndex
DROP INDEX "User_shadowId_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "shadowId";

-- AlterTable
ALTER TABLE "ProductAsset" DROP COLUMN "shadowId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "shadowId";
