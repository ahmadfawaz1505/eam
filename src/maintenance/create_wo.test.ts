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

export const get_plan = async () => {
  return await db.mo_plan.findMany({
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
      mop_material_mop_material_id_mo_planTomo_plan: {
        select: {
          m_asset: {
            select: {
              name: true,
            },
          },
          quantity: true,
        },
        // _sum: {
        //   price: true,
        // },
      },
    },
  });
};

test("detail create wo", async () => {
  const plan = await get_plan();
  const result = await db.mo_plan.aggregate({
    _sum: {
      price: true,
    },
  });

  //   console.log(result);
});
