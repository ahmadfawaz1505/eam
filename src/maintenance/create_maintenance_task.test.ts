import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("detail create wo", async () => {
  const result = await db.m_maintenance_task.create({
    data: {
      name: "cek baut",
    },
  });

  //   console.log(result);
});
