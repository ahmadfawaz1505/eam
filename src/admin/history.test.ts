import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("Histori inspection", async () => {
  const history_inspection = await db.m_asset.findMany({
    where: {
      id: "fa95ef66-9024-4268-9a2e-f764ff9000c9",
      location: {
        id: "e6047c0f-b917-4424-9708-8ddbc53fc108",
      },
    },
    select: {
      id: true,
      created_at: true,
      name: true,
      category: {
        select: {
          id: true,
          name: true,
        },
      },
      location: {
        select: {
          id: true,
          name: true,
        },
      },
      inspection_record: {
        select: {
          id: true,
          document_number: true,
          result: true,
          m_user: {
            select: {
              id: true,
              name: true,
            },
          },
          inspection_detail: {
            where: {
              inspection_record: { id: "e7d47cbf-9112-449d-946a-d69aad0884bb" },
            },
            select: {
              id: true,
              m_parameter_inspection: {
                select: {
                  id: true,
                  name: true,
                },
              },
              score: true,
            },
          },
        },
      },
    },
  });
  console.log(history_inspection);
});

test("History maintenance ticket", async () => {
  const history_mtn_ticket = await db.maintenance_order.findFirst({
    where: {
      inspection_record: {
        id: "e7d47cbf-9112-449d-946a-d69aad0884bb",
      },
    },
    select: {
      id: true,
      created_at: true,
      mo_number: true,
      name: true,
      m_user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  console.log(history_mtn_ticket);
});


test("History maintenance plan", async () => {
  const history_mtn_plan = await db.mo_plan.findMany({
    where: {
      maintenance_order: {
        id: "c1ce4c35-1d6e-47fc-bd53-f27bd16d4a6a",
      },
    },
    select: {
      id: true,
      created_at: true,
      name: true,
      _count: { 
        select: {other_mo_plan},
      },
    },
  });
  console.log(history_mtn_plan);
});
  