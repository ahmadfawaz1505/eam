import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();


export  const get_asset =  async () => {
  return await db.m_asset.findFirst({
    where: {
      id: "fa95ef66-9024-4268-9a2e-f764ff9000c9",
      location: {
        id: "e6047c0f-b917-4424-9708-8ddbc53fc108",
      },
    },
    select: {
      id: true,
      name: true,
      location: {
        select: {
          id: true,
          name: true,
        },
      },
      category: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
}

test("new inspection schedule", async () => {
  const asset = await get_asset()

  const inp_schedule = await db.inspection_schedule.create({
    data: {
      name: "Jadwal inspeksi 23/01/2024",
      // scheduled_at: "2024-01-10 00:00:00",
      // created_at: new Date(),
      m_user_inspection_schedule_created_byTom_user: {
        connect: { id: "294d4986-f1ac-4bf5-9f0e-c963e94627b6" }
      },
      m_asset: {
        connect: {
          id: asset.id,
        }
      },
      location:{
        connect: {id: asset.location.id}
      },
      m_user:
      {
        connect: { id: "67f64a2c-8ca6-49fe-94b2-de07ca907768" }
      },
    },
  });
  console.log(inp_schedule);
});
