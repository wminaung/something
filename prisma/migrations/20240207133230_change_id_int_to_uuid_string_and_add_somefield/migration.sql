/*
  Warnings:

  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ProductAsset` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `description` on the `ProductAsset` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `ProductAsset` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[shadowId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shadowId]` on the table `ProductAsset` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shadowId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductAsset" DROP CONSTRAINT "ProductAsset_productId_fkey";

-- DropIndex
DROP INDEX "ProductAsset_name_key";

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
ADD COLUMN     "shadowId" SERIAL NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Product_id_seq";

-- AlterTable
ALTER TABLE "ProductAsset" DROP CONSTRAINT "ProductAsset_pkey",
DROP COLUMN "description",
DROP COLUMN "name",
ADD COLUMN     "shadowId" SERIAL NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "productId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ProductAsset_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ProductAsset_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ADD COLUMN     "shadowId" SERIAL NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Product_shadowId_key" ON "Product"("shadowId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductAsset_shadowId_key" ON "ProductAsset"("shadowId");

-- CreateIndex
CREATE UNIQUE INDEX "User_shadowId_key" ON "User"("shadowId");

-- AddForeignKey
ALTER TABLE "ProductAsset" ADD CONSTRAINT "ProductAsset_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
