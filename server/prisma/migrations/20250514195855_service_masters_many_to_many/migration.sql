-- CreateTable
CREATE TABLE "ServiceMaster" (
    "serviceId" TEXT NOT NULL,
    "masterId" TEXT NOT NULL,

    PRIMARY KEY ("serviceId", "masterId"),
    CONSTRAINT "ServiceMaster_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ServiceMaster_masterId_fkey" FOREIGN KEY ("masterId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
