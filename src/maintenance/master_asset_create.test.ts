import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("maaster asset create", async () => {
  const result = await db.m_asset.create({
    data: {
      name: "kipas filter",
      brand: "panasonic",
      type: "ac 3pk",
      location: {
        connect: {
          id: "e6047c0f-b917-4424-9708-8ddbc53fc108",
        },
      },
      serial_number: "1123-123-1123",
      dimension: "300 x 200 x 150",
      manufacture_year: "2020",
      description: "asset kipas angin",
      latitude: "-783743",
      longitude: "113.34343.2323",
      created_at: new Date(),
      created_by: "eb34d583-7fd8-4fc7-9435-98d7ab247b30",
    },
  });

  // console.log(result);
});
