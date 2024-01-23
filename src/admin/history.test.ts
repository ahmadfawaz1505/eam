import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("History", async () => {
    const history = await db.inspection_record.findMany({
      where: {m_asset: {id: "fa95ef66-9024-4268-9a2e-f764ff9000c9"}},
      select: {
        m_asset: {
          select: {
            id: true,
            name: true,
            brand: true,
            type: true,
            serial_number: true,
            dimension: true,
            uom: true,
            manufacture_year: true,
            description: true,
            latitude: true,
            longitude: true,
            condition_status: true,
            category: {
                select: {
                    id: true,
                    name: true,
                },
              },
          },
        },
        location: {
          select: {
            id: true,
            name: true,
          },
        },
        //reported issue
        inspection_detail: {
            select: {
                id: true,
                m_parameter_inspection: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        },
        result: true,
        m_user: {
          select: {
            id: true,
            name: true,
          },
        },
        // maintenance ticket
        maintenance_order: {
            select: {
                id: true,
                created_at: true,
                name: true,
                mo_number: true,
                m_user:{
                    select:{
                        id: true,
                        name: true,
                    },
                },
        //maintenance plan
                mo_plan: {
                    select: {
                        id: true,
                        name: true,
                        price: true,
                        m_maintenance_task: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                        //mop_material: {},
                    },
                },
            },
        },
        // maintenance record
      },
    });
    //  console.log(history);
  });


test("History", async () => {
  const history_inspection = await db.m_asset.findMany({
    where: {
      id: "fa95ef66-9024-4268-9a2e-f764ff9000c9",
      location: {
        id: "e6047c0f-b917-4424-9708-8ddbc53fc108",
      },
    },
    select: {
      id: true,
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

  