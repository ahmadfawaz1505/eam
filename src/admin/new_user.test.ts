import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("add new user", async () => {
  const new_user = await db.m_user.create({
    data: {
      name: "Jhon",
      email: "jhon@gmail.com",
      password: "123456", 
      user_role: {
        connect: {
            id: "",
            id_role: "46446464"},
      }, 
    },
  });
  //  console.log(new_user);
});