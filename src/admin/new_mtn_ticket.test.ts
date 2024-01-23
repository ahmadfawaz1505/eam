import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("new maintenance ticket", async () => {
    const new_mtn_ticket = await db.maintenance_order.findFirst({
      select: {
       m_asset: {
        select: {
            id: true,
            name: true,
            category: {
                select: {
                    id: true,
                    name: true,
                },
            },
        },
       },
      },
      .create({
        
      });
    });
    //  console.log(follow_up);
  });
  