import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("mop update", async () => {
  const result = await db.mop_material.update({
    where: { id: "796d3a05-5f85-4976-b80c-90e8325147bb" },
    data: {
      quantity: 1,
      price: 132000,
      created_by: "dd226c0d-bda3-4862-97fc-9ff6e7dd2183",
    },
  });

  //   console.log(result);
});
