import { PrismaClient } from "@prisma/client";
import { get_asset } from "./inspection_schedule.test";
const db = new PrismaClient();

test("scan detail", async () => {
  //const asset = await get_asset()
  const scan_detail = await db.m_asset.findFirst({
    where: {id: "fa95ef66-9024-4268-9a2e-f764ff9000c9"},
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
   console.log(scan_detail);
});