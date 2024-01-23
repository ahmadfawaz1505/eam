import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("detail location dan category", async () => {
  const result = await db.mo_record.findMany({
    where: { id: "a30e6f87-79ee-4d3a-bf46-85f604d5e62e" },
    select: {
      id: true,
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

test("penggabungan nama task dan nama user yg dbawah ", async () => {
  const result = await db.mo_record.findMany({
    select: {
      id: true,
      m_maintenance_task: {
        select: {
          name: true,
        },
      },
      m_user: {
        select: {
          name: true,
        },
      },
    },
  });

  //   console.log(result);
});

// test("nama task & user ", async () => {
//   const result = await db.mor_material.findMany({
//     select: {
//       id: true,
//       m_maintenance_task: {
//         select: {
//           name: true,
//         },
//       },
//       m_user: {
//         select: {
//           name: true,
//         },
//       },
//     },
//   });

//   //   console.log(result);
// });

test("mor material ", async () => {
  const result = await db.mo_record.findMany({
    select: {
      id: true,
      //   gk ada mor material krena id nya masih salah
      quantity: true,
      price: true,
    },
  });

  //   console.log(result);
});

test("maintenance task ", async () => {
  const result = await db.m_maintenance_task.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  //   console.log(result);
});
