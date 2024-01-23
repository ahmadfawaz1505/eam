import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("mop material view", async () => {
  const result = await db.mop_material.findMany({
    select: {
      id: true,
      mo_plan_mop_material_id_mo_planTomo_plan: {
        select: {
          name: true,
        },
      },
      // gk ada namenya krena moplan nya ndk bisa direlasikan
      quantity: true,
      price: true,
    },
  });

  //   console.log(result);
});
