import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("detail asset dan location", async () => {
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

test("hasil scan inspect", async () => {
  const result = await db.m_asset.findMany({
    include: {
      location: {
        select: {
          name: true,
        },
      },
    },
  });

  // console.log(result);
});
