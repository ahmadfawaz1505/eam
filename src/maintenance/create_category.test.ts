import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("category create", async () => {
  const result = await db.category.create({
    data: {
      name: "AC",
      created_at: new Date(),
      updated_at: new Date(),
      created_by: "67f64a2c-8ca6-49fe-94b2-de07ca907768",
    },
  });

  //   console.log(result);
});

// test("category delete", async () => {
//   const result = await db.category.delete({
//     where: {
//       id:"2548a54b-ec88-42f4-8cd0-2722d8e92bb6",
//       name: "pcb",
//     },
//   });

//   //   console.log(result);
// });
