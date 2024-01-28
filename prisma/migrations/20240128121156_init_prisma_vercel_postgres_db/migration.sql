-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pets" (
    "name" VARCHAR(255),
    "owner" VARCHAR(255)
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
