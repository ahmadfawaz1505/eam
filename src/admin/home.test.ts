import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("list inspection schedule", async () => {
  const inp_schedule = await db.inspection_schedule.findMany({
    where: {},
    select: {
      id: true,
      name: true,
      scheduled_at: true,
    },
  });

  // console.log(inp_schedule);
});

test("list maintenance schedule", async () => {
  const result = await db.maintenance_schedule.findMany({
    where: {},
    select: {
      id: true,
      name: true,
      scheduled_at: true,
    },
  });

  //   console.log(result);
});

// test("hasil scan inspect", async () => {
//   const result = await db.inspection_record.findMany({
//     include: {
//       m_user: {
//         select: {
//           name: true,
//         },
//       },
//     },
//     select: {
//       result: true,
//     },
//   });

//   console.log(result);
// });

test("list follow up", async () => {
  const result = await db.inspection_record.findMany({
    select: {
      id: true,
      m_asset: {
        select: {
          name: true,
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
      result: true,
    },
  });

  // console.log(result);
});

test("Maintenance Tracking", async () => {
  const result = await db.maintenance_schedule.findMany({
    where: {},
    select: {
      id: true,
      name: true,
      scheduled_at: true,
    },
  });

  //   console.log(result);
});
