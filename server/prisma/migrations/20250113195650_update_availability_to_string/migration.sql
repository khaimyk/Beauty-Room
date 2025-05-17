-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MasterAvailability" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "MasterAvailability_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MasterAvailability" ("availability", "createdAt", "id", "updatedAt", "userId") SELECT "availability", "createdAt", "id", "updatedAt", "userId" FROM "MasterAvailability";
DROP TABLE "MasterAvailability";
ALTER TABLE "new_MasterAvailability" RENAME TO "MasterAvailability";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
