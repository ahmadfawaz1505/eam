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

  console.log(inp_schedule);
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

// test("list issue", async () => {
//   const result = await db.inspection_record.findMany({
//     include: {
//       m_asset: {
//         select:{
//           name: true,
//           include: {
//             category: {
//               select:{
//                 name: true,
//               }
//             }
//           },
//           status: true,
//           include: {
//             m_user:  {
//               name: true,
//             }
//           },
//         }
//       }
//     },
//   });

//   //   console.log(result);
// });

test("list follow up", async () => {
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
