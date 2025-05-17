/*
  Warnings:

  - A unique constraint covering the columns `[messageId]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Booking" ADD COLUMN "messageId" TEXT;

-- CreateTable
CREATE TABLE "BookingMessage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bookingId" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,
    "messageId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "BookingMessage_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "BookingMessage_bookingId_key" ON "BookingMessage"("bookingId");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_messageId_key" ON "Booking"("messageId");
