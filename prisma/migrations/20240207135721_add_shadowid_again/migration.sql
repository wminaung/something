/*
  Warnings:

  - A unique constraint covering the columns `[shadowId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shadowId]` on the table `ProductAsset` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shadowId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "shadowId" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "ProductAsset" ADD COLUMN     "shadowId" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "shadowId" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Product_shadowId_key" ON "Product"("shadowId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductAsset_shadowId_key" ON "ProductAsset"("shadowId");

-- CreateIndex
CREATE UNIQUE INDEX "User_shadowId_key" ON "User"("shadowId");
