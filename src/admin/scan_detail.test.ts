import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("scan detail", async () => {
  const scan_detail = await db.m_asset.findMany({
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
      location: {
        select: {
            id: true,
            name: true,
        },
      },
    },
  });
  //  console.log(scan_detail);
});