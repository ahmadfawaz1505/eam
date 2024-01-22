import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("master asset create", async () => {
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

// test("maintenance task", async () => {
//     const result = await db.category.update({
//     where:{id: "877f8d29-8668-4349-82fa-1c77498334bc"}
//       data: {
//         name: "pelindung",
//         created_by: "67f64a2c-8ca6-49fe-94b2-de07ca907768",
//       },
//     });

//     //   console.log(result);
//   });
