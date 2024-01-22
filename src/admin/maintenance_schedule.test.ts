import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();


//audit_trail -> id, ts, by, activity, table, meta
test("create maintenance schedule", async () => {
  const mtn_schedule = await db.maintenance_schedule.create({
    data: {
        name: "Jadwal maintenance rutin",
        scheduled_at: "2024-09-14 00:00:00",
        created_by: "67f64a2c-8ca6-49fe-94b2-de07ca907768",
        assigned_to: {
            connect: {id: ""}
            // connectOrCreate: {create: {}, where: {id : ""}}
        },
        m_asset: {
            connect: {id: ""}
        },
        location: {
            connect: {id: ""}
        }
    },
  });

  console.log(mtn_schedule);
});