import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("detail guest header", async () => {
  const result = await db.inspection_detail.findMany({
    select: {
      id: true,
      inspection_record: {
        select: {
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
      },
    },
  });

  //   console.log(result);
});

test("detail guest kondisi", async () => {
  const result = await db.inspection_detail.findMany({
    select: {
      id: true,
      note: true,
      score: true,
      inspection_record: {
        select: {
          id: true,
          result: true,
        },
      },
    },
  });

  //   console.log(result);
});

test("detail status followup", async () => {
  const result = await db.maintenance_order.findMany({
    select: {
      id: true,
      name: true,
      status: true,
    },
  });

  // console.log(result);
});

test("detail status bawahnya followup", async () => {
  const result = await db.mo_record.findMany({
    select: {
      id: true,
      name: true,
      status: true,
      m_user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  // console.log(result);
});
