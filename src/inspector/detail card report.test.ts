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

test("card issue problem", async () => {
  const result = await db.m_parameter_inspection.findMany({
    where: {},
    select: {
      id: true,
      id_parent: true,
      name: true,
      min_value: true,
      min_value_description: true,
      max_value: true,
      created_at: true,
    },
  });

  //   console.log(result);
});
