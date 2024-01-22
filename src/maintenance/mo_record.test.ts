import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("detail location dan category", async () => {
  const result = await db.m_asset.findMany({
    select: {
      id: true,
      name: true,
      category: {
        select: {
          id: true,
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
  });

  //   console.log(result);
});

test("list mo plan dan mo record", async () => {
  const result = await db.mo_record.findMany({
    select: {
      id: true,
      m_maintenance_task: {
        select: {
          name: true,
        },
      },
      name: true,
      price: true,
    },
  });

  //   console.log(result);
});
