import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("detail asset dan location", async () => {
  const result = await db.m_asset.findMany({
    // where: { id: "" },
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

test("report issue problem", async () => {
  const result = await db.inspection_detail.findMany({
    where: {},
    select: {
      id: true,
      note: true,
      score: true,
    },
  });

  //   console.log(result);
});
