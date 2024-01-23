import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("master asset create category", async () => {
  const result = await db.location.create({
    data: {
      name: "Rak pojok",
      created_at: new Date(),
      updated_at: new Date(),
      created_by: "67f64a2c-8ca6-49fe-94b2-de07ca907768",
    },
  });

  //   console.log(result);
});

// test("location delete", async () => {
//   const result = await db.location.delete({
//     where: {
//       id:"e570e634-0a92-4e90-9ca9-c27ddd2473e1",
//       name: "Rak pojok",
//     },
//   });

//   //   console.log(result);
// });
