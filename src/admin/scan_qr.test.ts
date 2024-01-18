import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("Asset  Scan Detail", async () => {
  const scan = await db.m_asset.findMany({
    where: {},
    select: {
      id: true,
      name: true,
      brand: true,
      type: true,
      include: {
        location:{
            select:{
                name: true,
            }
        }
      }
    },
  });

   console.log(scan);
});
