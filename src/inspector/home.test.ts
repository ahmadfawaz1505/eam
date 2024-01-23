import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("list inspection schedule", async () => {
  const result = await db.inspection_schedule.findMany({
    where: {},
    select: {
      id: true,
      name: true,
      created_at: true,
    },
  });

  //   console.log(result);
});

test("list maintenance schedule", async () => {
  const result = await db.inspection_schedule.findMany({
    where: {},
    select: {
      id: true,
      name: true,
      created_at: true,
    },
  });

  //   console.log(result);
});

test("list inspection record", async () => {
  const result = await db.inspection_record.findMany({
    where: {},
    select: {
      id: true,
      id_inspection_schedule: true,
      document_number: true,
      result: true,
      created_at: true,
      status: true,
    },
  });
});
