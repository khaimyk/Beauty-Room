/*
  Warnings:

  - A unique constraint covering the columns `[chatId]` on the table `Client` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Client" ADD COLUMN "chatId" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN "nickName" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Client_chatId_key" ON "Client"("chatId");
