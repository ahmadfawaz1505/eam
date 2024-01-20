import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("list inspection schedule", async () => {
  const inp_schedule = await db.inspection_schedule.findMany({
    select: {
      id: true,
      name: true,
      scheduled_at: true,
      m_asset:{
        select: {
          name: true,
          category: {
            select: {
              name: true,
            },
          },
        },
      },
      m_user: {
        select: {
          name: true,
        },
      },
    },
  });

  console.log(inp_schedule);
});

