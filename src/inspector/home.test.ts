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
      created_at: true,
      name: true,
    },
  });

  //   console.log(result);
});

test("list mo record", async () => {
  const result = await db.mo_record.findMany({
    where: {},
    select: {
      id: true,
      status: true,
      m_asset: {
        select: {
          id: true,
          category: {
            select: {
              name: true,
            },
          },
          location: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
      // kurang yg 66%
    },
  });
});
