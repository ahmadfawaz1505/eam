import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("maintenance task", async () => {
  const result = await db.m_maintenance_task.create({
    data: {
      name: "cek baut",
      created_at: new Date(),
      updated_at: new Date(),
      created_by: "67f64a2c-8ca6-49fe-94b2-de07ca907768",
      note: "note",
    },
  });

  //   console.log(result);
});
