import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("add new user", async () => {
  const new_user = await db.m_user.update({
    where:{
        id: "280a8d50-d1ad-4e0e-9b58-63ebecec30e4",
    },
    data: {
      name: "Jhonathan",
      email: "jhon@gmail.com",
      password: "123456",
      updated_at: new Date(),
      updated_by: "67f64a2c-8ca6-49fe-94b2-de07ca907768",   
      user_role: {
        update: {
          where: {
            id: "64d48c39-64fd-48b3-9bd8-82670db3cbf9",
          },
          data: {
            id_role: "1ca7909d-9e4f-4926-8507-fddd5654c49b"
          }
        },
      },
    }, 
  });
    console.log(new_user);
});