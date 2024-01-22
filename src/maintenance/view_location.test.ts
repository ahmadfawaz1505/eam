import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("detail location", async () => {
  const result = await db.location.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  //   console.log(result);
});
