import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("list asset", async () => {
  const listAsset = await db.m_asset.findMany({
    select: {
      id: true,
      name: true,
      brand: true,

    },
    
  });

   console.log(listAsset);
});
