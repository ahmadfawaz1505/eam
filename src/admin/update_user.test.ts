import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("add new user", async () => {
  const new_user = await db.m_user.update({
    where:{
        id: "8b23befc-f23f-404b-99b0-f48602e75f02",
    },
    data: {
      name: "Jhonathan",
      email: "jhon@gmail.com",
      password: "123456", 
      user_role: {
        connect: {
            id: "8b23befc-f23f-404b-99b0-f48602e75f02",
      }, 
    },
  });
  //  console.log(new_user);
});