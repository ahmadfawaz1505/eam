import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("detail category", async () => {
  const result = await db.category.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  //   console.log(result);
});
