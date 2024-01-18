import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("report issue problem", async () => {
  const result = await db.inspection_detail.findMany({
    where: {},
    select: {
      id: true,
      id_inspection_record: true,
      id_parameter_inspection: true,
      note: true,
      score: true,
    },
  });

  //   console.log(result);
});
