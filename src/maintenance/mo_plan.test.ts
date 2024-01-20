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
  const result = await db.mop_material.findMany({
    select: {
      id: true,
      quantity: true,
      price: true,
      m_asset: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  // console.log(result);
});
