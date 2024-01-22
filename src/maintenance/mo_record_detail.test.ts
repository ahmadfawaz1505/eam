import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("detail location dan category", async () => {
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

// test("penggabungan nama task dan nama user yg dbawah ", async () => {
//     const result = await db.mo_record.findMany({
//       select: {
//         id: true,
//         m_maintenance_task:{
//             select: {
//                 name: true,
//             },
//         },
//         m_user:{
//             select: {
//                 name: true,
//             },
//         },
//       },
//     });

//     //   console.log(result);
//   });

test("nama task ", async () => {
  const result = await db.m_maintenance_task.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  //   console.log(result);
});

test("nama user ", async () => {
  const result = await db.m_user.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  //   console.log(result);
});

test("mop material ", async () => {
  const result = await db.mop_material.findMany({
    select: {
      id: true,
      //   gk ada moplan krena id nya masih salah
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
