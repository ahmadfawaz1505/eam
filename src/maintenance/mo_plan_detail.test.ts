import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("detail location dan category", async () => {
  const result = await db.mo_plan.findMany({
    where: { id: "eda85abb-c037-4690-b691-79449605b36c" },
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

test("task dan user", async () => {
  const result = await db.mo_plan.findMany({
    where: { id: "eda85abb-c037-4690-b691-79449605b36c" },
    select: {
      id: true,
      name: true,
      m_maintenance_task: {
        select: {
          id: true,
          name: true,
        },
      },
      m_user: {
        select: {
          id: true,
          name: true,
        },
      },
      price: true,
    },
  });

  //   console.log(result);
});

test("mop material", async () => {
  const result = await db.mop_material.findMany({
    where: { id_mo_plan: "eda85abb-c037-4690-b691-79449605b36c" },
    select: {
      id: true,
      m_asset: {
        select: {
          id: true,
          name: true,
        },
      },
      quantity: true,
      price: true,
    },
  });

  // console.log(result);
});

test("mop material", async () => {
  const result = await db.mop_material.findMany({
    where: { id_mo_plan: "eda85abb-c037-4690-b691-79449605b36c" },
    select: {
      id: true,
      m_asset: {
        select: {
          id: true,
          name: true,
        },
      },
      quantity: true,
      price: true,
    },
  });

  // console.log(result);
});

//klo dicentang

// test("mop material", async () => {
//   const result = await db.m_maintenance_task.create({
//     data: {
//       name: "",
//     },
//   });

//   // console.log(result);
// });

//list
test("mop material", async () => {
  const result = await db.m_maintenance_task.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  // console.log(result);
});
