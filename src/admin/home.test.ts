import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("list inspection schedule", async () => {
  const result = await db.inspection_schedule.findMany({
    where: {},
    select: {
      id: true,
      name: true,
      scheduled_at: true,
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
      scheduled_at: true,
    },
  });

  //   console.log(result);
});