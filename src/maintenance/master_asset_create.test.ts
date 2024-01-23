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
      category: {
        connect: {
          id: "255cd3b3-435b-4982-9166-72c038b5c26a",
        },
      },
      serial_number: "1123-123-1123",
      dimension: "300 x 200 x 150",
      manufacture_year: "2020",
      description: "asset kipas angin",
      latitude: "-783743",
      longitude: "113.34343.2323",
      created_at: new Date(),
      m_user_m_asset_created_byTom_user: {
        connect: {
          id: "eb34d583-7fd8-4fc7-9435-98d7ab247b30",
        },
      },
      // created_by: "eb34d583-7fd8-4fc7-9435-98d7ab247b30",
    },
  });

  // console.log(result);
});

test("maaster asset update", async () => {
  const result = await db.m_asset.update({
    where: { id: "970c4c5e-a9cf-4dc2-90b6-f256fe0293c4" },
    data: {
      name: "charge", //sbelumnya charger
      brand: "panasonic",
      type: "ac 3pk",
      location: {
        connect: {
          id: "e6047c0f-b917-4424-9708-8ddbc53fc108",
        },
      },
      category: {
        connect: {
          id: "255cd3b3-435b-4982-9166-72c038b5c26a",
        },
      },
      serial_number: "1123-123-1123",
      dimension: "300 x 200 x 150",
      manufacture_year: "2020",
      description: "charge",
      latitude: "-783743",
      longitude: "113.34343.2323",
      created_at: new Date(),
      m_user_m_asset_created_byTom_user: {
        connect: {
          id: "eb34d583-7fd8-4fc7-9435-98d7ab247b30",
        },
      },
      // created_by: "eb34d583-7fd8-4fc7-9435-98d7ab247b30",
    },
  });

  // console.log(result);
});
