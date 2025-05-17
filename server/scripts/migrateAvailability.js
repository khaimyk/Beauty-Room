const { prisma } = require("../prisma/prisma-client");

const migrateAvailability = async () => {
  try {
    const allRecords = await prisma.masterAvailability.findMany();

    for (const record of allRecords) {
      const { id, days, startTime, endTime } = record;

      if (!days || !startTime || !endTime) {
        console.log(`Skipping record with ID: ${id}, missing fields.`);
        continue;
      }

      const availability = JSON.parse(days).map((day) => ({
        date: day,
        startTime,
        endTime,
      }));

      await prisma.masterAvailability.update({
        where: { id },
        data: { availability: JSON.stringify(availability) },
      });

      console.log(`Successfully migrated record with ID: ${id}`);
    }

    console.log("Migration completed successfully.");
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    await prisma.$disconnect();
  }
};

migrateAvailability();
