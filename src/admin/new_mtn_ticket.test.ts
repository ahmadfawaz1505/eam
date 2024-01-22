import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("selected asset", async () => {
    const selected_asset = await db.m_asset.findMany({
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
    console.log(selected_asset);
  });

test("new maintenance ticket", async () => {
    const new_mtn_ticket = await db.maintenance_order.create({
        data: {
            mo_number: "MTN1000111",
            name: "Service HP",
            status: "On Going",
            created_at: new Date(),
            m_user_maintenance_order_created_byTom_user: {
                connect: {id: "294d4986-f1ac-4bf5-9f0e-c963e94627b6"}
            },
            inspection_record: {
                connect: {id: "aff84e3b-ac2a-4176-a47a-d6dd5faec6f3"}
            },
            m_asset: {
                connect: {id: "fa95ef66-9024-4268-9a2e-f764ff9000c9"}
            },
            //assigned to
            m_user: {
                connect: {id: "67f64a2c-8ca6-49fe-94b2-de07ca907768"}
            },
        },
    });
     console.log(new_mtn_ticket);
  });
  