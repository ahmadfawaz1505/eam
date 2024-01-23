import { PrismaClient } from "@prisma/client";
import { get_asset } from "./inspection_schedule.test";
const db = new PrismaClient();

test("selected asset", async () => {
  const selected_asset = await db.m_asset.findMany({
    where: {
      id: "fa95ef66-9024-4268-9a2e-f764ff9000c9",
      location: {
        id: "e6047c0f-b917-4424-9708-8ddbc53fc108",
      },
    },
    select: {
      id: true,
      name: true,
      location: {
        select: {
          id: true,
          name: true,
        },
      },
      category: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  console.log(selected_asset);
});

// //audit_trail -> id, ts, by, activity, table, meta
// test("create maintenance schedule", async () => {
//   const asset = await get_asset()
//   const mtn_schedule = await db.maintenance_schedule.create({
//     data: {
//         name: "Jadwal maintenance rutin",
//         scheduled_at: "2024-09-14 00:00:00",
//         m_user_maintenance_schedule_created_byTom_user: {
//           connect: { id: "67f64a2c-8ca6-49fe-94b2-de07ca907768"}
//         },
//         assigned_to: {
//             connect: {id: ""}
//             // connectOrCreate: {create: {}, where: {id : ""}}
//         },
//         m_asset: {
//             connect: {id: ""}
//         },
//         location: {
//             connect: {id: ""}
//         }
//     },
//   });

//   console.log(mtn_schedule);
// });