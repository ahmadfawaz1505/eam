import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("issue", async () => {
    const issue = await db.inspection_record.findMany({
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
        // status = not yet maintenance, inspected by user
      },
    });
    //  console.log(issue);
  });