import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("maintenance tracking", async () => {
    const mtn_tracking = await db.inspection_record.findMany({
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
    //  console.log(issue);
  });