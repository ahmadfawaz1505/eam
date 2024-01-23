import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("inspection schedule", async () => {
  const inp_schedule = await db.inspection_schedule.findMany({
    select: {
      id: true,
      name: true,
      scheduled_at: true,
      assigned_to: true,
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
      location: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  //  console.log(inp_schedule);
});

test("maintenance schedule", async () => {
  const mnt_schedule = await db.maintenance_schedule.findMany({
    select: {
      id: true,
      name: true,
      scheduled_at: true,
      assigned_to: true,
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
      location: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  //  console.log(mnt_schedule);
});

test("issue", async () => {
  const issue = await db.inspection_record.findMany({
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
      location: {
        select: {
          id: true,
          name: true,
        },
      },
      result: true,
      m_user: {
        select: {
          id: true,
          name: true,
        },
      },
      // status = not yet maintenance, inspected by user
    },
  });
  //  console.log(issue);
});

test("follow up", async () => {
  const follow_up = await db.maintenance_order.findMany({
    select: {
      inspection_record: {
        select: {
          id: true,
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
          location: {
            select: {
              id: true,
              name: true,
            },
          },
          result: true,
          m_user: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
      name: true,
      mo_number: true,
      m_user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  //  console.log(follow_up);
});

test("maintenance tracking", async () => {
  const mtn_tracking = await db.inspection_schedule.findMany({
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
  });
  //  console.log(inp_schedule);
});