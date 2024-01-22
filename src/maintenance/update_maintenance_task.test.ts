import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("maintenance task", async () => {
  const result = await db.m_maintenance_task.update({
    where: { id: "7da88f05-e199-4b01-845f-21354b95f4eb" },
    data: {
      name: "servis ph",
    },
  });

  //   console.log(result);
});
