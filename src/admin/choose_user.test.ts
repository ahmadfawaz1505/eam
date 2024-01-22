import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("choose user", async () => {
  const choose_user = await db.m_user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
    console.log(choose_user);
});