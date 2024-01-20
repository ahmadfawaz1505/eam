import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

// test("hasil scan inspect", async () => {
//   const result = await db.m_asset.findMany({
//     where: {},
//     select: {
//       id: true,
//       id_location: true,
//       name: true,
//       brand: true,
//       type: true,
//       dimension: true,
//       uom: true,
//       manufacture_year: true,
//       description: true,
//       latitude: true,
//       longitude: true,
//       created_at: true,
//     },
//   });

//   // console.log(result);
// });

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

  //console.log(result);
});
