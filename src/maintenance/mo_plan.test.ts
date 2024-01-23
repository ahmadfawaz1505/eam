import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("detail location dan category", async () => {
  const result = await db.mo_plan.findMany({
    select: {
      id: true,
      name: true,
      m_asset: {
        select: {
          id: true,
          category: {
            select: {
              name: true,
            },
          },
          location: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  //   console.log(result);
});

// test("centang tercreate datanya", async () => {
//   const result = await db.mo_plan.create({
//     data:{
//       m_maintenance_task:{
//         id:"",
//         name: "servis",
//       },
//     },
//   });

//   // console.log(result);
// });

test("task", async () => {
  const result = await db.mo_plan.findMany({
    select: {
      id: true,
      m_maintenance_task: {
        select: {
          name: true,
        },
      },
      price: true,

      // kurang field name relasi mop-material dan mo_plan krena id nya over
    },
  });

  // console.log(result);
});
