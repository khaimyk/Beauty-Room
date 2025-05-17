-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Branch" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "phoneNumber" TEXT,
    "description" TEXT,
    "socialMedia" TEXT,
    "googleMapLink" TEXT,
    "status" TEXT NOT NULL DEFAULT 'INACTIVE',
    "superAdminId" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    CONSTRAINT "Branch_superAdminId_fkey" FOREIGN KEY ("superAdminId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Branch_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Branch" ("address", "adminId", "createdAt", "deletedAt", "description", "googleMapLink", "id", "name", "phoneNumber", "socialMedia", "status", "superAdminId", "updatedAt") SELECT "address", "adminId", "createdAt", "deletedAt", "description", "googleMapLink", "id", "name", "phoneNumber", "socialMedia", "status", "superAdminId", "updatedAt" FROM "Branch";
DROP TABLE "Branch";
ALTER TABLE "new_Branch" RENAME TO "Branch";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
