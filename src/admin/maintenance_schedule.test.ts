import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("create maintenance schedule", async () => {
  const mtn_schedule = await db.maintenance_schedule.create({
    data: {
      name: "Jadwal maintenance rutin",
      scheduled_at: "2024-09-14 00:00:00",
      created_at: new Date(),
      created_by: "67f64a2c-8ca6-49fe-94b2-de07ca907768",
      updated_at: "",
      updated_by: "",
      m_user: {
        connect: { id: "" },
      },
      m_asset: {
        connect: { id: "" },
      },
      location: {
        connect: { id: "" },
      },
      // m_user:{
      //     create: {
      //         name: "Fawas",
      //     },
      // },
      // include: {
      // m_user: {},
      // },
    },
  });

  //   console.log(mtn_schedule);
});
