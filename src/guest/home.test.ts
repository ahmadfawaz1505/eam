import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("hasil scan inspect", async () => {
  const result = await db.inspection_record.findMany({
    where: {},
    include: {
      location: {
        select: {
          name: true,
        },
        include: {
          m_asset: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  // console.log(result);
});
