import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("Issue Report", async () => {
    const result = await db.inspection_detail.findMany({
      where: {},
      select: {
        id: true,
      },
    });
  
    //   console.log(result);
  });