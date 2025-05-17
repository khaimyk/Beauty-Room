/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `MasterAvailability` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "MasterAvailability_userId_key" ON "MasterAvailability"("userId");
