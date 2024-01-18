import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("card issue problem", async () => {
  const result = await db.inspection_detail.findMany({
    where: {},
    select: {
      id: true,
      note: true,
      score: true,
    },
  });

  //   console.log(result);
});
