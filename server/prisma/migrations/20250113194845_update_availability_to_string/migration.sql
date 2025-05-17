-- Turn off foreign key constraints temporarily
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;

-- Step 1: Add the new column `availability` as optional
ALTER TABLE "MasterAvailability" ADD COLUMN "availability" TEXT;

-- Step 2: Populate the `availability` column with data from existing columns
UPDATE "MasterAvailability"
SET "availability" = 
    '[' || 
    COALESCE('{"date":"' || days || '","startTime":"' || startTime || '","endTime":"' || endTime || '"}', 'null') 
    || ']';

-- Step 3: Drop old columns
ALTER TABLE "MasterAvailability" DROP COLUMN "days";
ALTER TABLE "MasterAvailability" DROP COLUMN "startTime";
ALTER TABLE "MasterAvailability" DROP COLUMN "endTime";

-- Step 4: Make `availability` required (optional)
ALTER TABLE "MasterAvailability" ADD COLUMN "_availability_temp" TEXT NOT NULL DEFAULT '[]';
UPDATE "MasterAvailability" SET _availability_temp = availability;
ALTER TABLE "MasterAvailability" DROP COLUMN "availability";
ALTER TABLE "MasterAvailability" RENAME COLUMN "_availability_temp" TO "availability";

-- Restore foreign key constraints
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
