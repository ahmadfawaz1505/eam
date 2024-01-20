import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("detail location dan category", async () => {
  const result = await db.mop_material.findMany({
    select: {
      id: true,
      //   gk ada moplan karena idnya ndk ada
      quantity: true,
      price: true,
    },
  });

  //   console.log(result);
});
