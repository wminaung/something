/*
  Warnings:

  - A unique constraint covering the columns `[productId]` on the table `ProductAsset` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `productId` to the `ProductAsset` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductAsset" ADD COLUMN     "productId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT DEFAULT 'ecolife desc',

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ProductAsset_productId_key" ON "ProductAsset"("productId");

-- AddForeignKey
ALTER TABLE "ProductAsset" ADD CONSTRAINT "ProductAsset_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
