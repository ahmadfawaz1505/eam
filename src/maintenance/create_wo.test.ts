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

test("detail create wo", async () => {
  const result = await db.mo_plan.findMany({
    select: {
      id: true,
      name: true,
      m_user: {
        select: {
          id: true,
          name: true,
        },
      },
      maintenance_order: {
        select: {
          id: true,
          name: true,
        },
      },
      quantity: true,
      price: true,
    },
  });

  //   console.log(result);
});

test("detail create wo", async () => {
  const result = await db.inspection_record.findMany({
    select: {
      m_asset: {
        select: {
          id: true,
          name: true,
          category: {
            select: {
              id: true,
              name: true,
              created_at: true,
            },
          },
          location: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });
  //   console.log(result);
});
