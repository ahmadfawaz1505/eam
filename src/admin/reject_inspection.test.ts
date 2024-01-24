import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

const get_inpRef = async () => {
  return await db.inspection_record.findFirst({
    where: {
      id: "e7d47cbf-9112-449d-946a-d69aad0884bb",
    },
    select: {
      id: true,
      document_number: true,
      result: true,
    },
  });
}

test("reject inspection", async () => {
  const inpOrder = await get_inpRef()
  const reject_inspection = await db.inspection_record.update({
    where: {
      id: inpOrder.id,
    },
    data: {
      updated_at: new Date(),
      updated_by: "67f64a2c-8ca6-49fe-94b2-de07ca907768",
      acc_status: {
        set: "Reject",
      },
      reason: "Asset masih berfungsi dan dapat digunakan",
    },
  });
  console.log(reject_inspection);
});