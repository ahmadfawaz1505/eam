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

test("task", async () => {
  const result = await db.mo_plan.findMany({
    select: {
      id: true,
      quantity: true,
      price: true,
      m_maintenance_task: {
        select: {
          name: true,
        },
      },

      // kurang field name relasi mop-material dan mo_plan krena id nya over
    },
  });

  // console.log(result);
});
