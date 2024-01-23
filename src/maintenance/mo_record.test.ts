import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("detail location dan category", async () => {
  const result = await db.mo_record.findMany({
    where: { id: "a30e6f87-79ee-4d3a-bf46-85f604d5e62e" },
    select: {
      id: true,
      m_asset: {
        select: {
          id: true,
          category: {
            select: {
              name: true,
            },
          },
          location: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  //   console.log(result);
});

test("cekbox mo_record create", async () => {
  const result = await db.mo_record.create({
    // where: { id: "a30e6f87-79ee-4d3a-bf46-85f604d5e62e" },
    data: {
      document_number: "mtn100001",
      name: "servis hp",
      quantity: 1,
      price: 150000,
      created_by: "",
    },
  });

  //   console.log(result);
});

test("list mo plan dan mo record", async () => {
  const result = await db.mo_record.findMany({
    where: { id: "a30e6f87-79ee-4d3a-bf46-85f604d5e62e" },
    select: {
      id: true,
      m_maintenance_task: {
        select: {
          name: true,
        },
      },
      name: true,
      price: true,
    },
  });

  //   console.log(result);
});
