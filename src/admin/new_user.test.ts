import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("add new user", async () => {
  const new_user = await db.m_user.create({
    data: {
      name: "Nathan",
      email: "nathan@gmail.com",
      password: "123456", 
      created_by: "294d4986-f1ac-4bf5-9f0e-c963e94627b6",
      user_role: {
        create: {
          created_by: "294d4986-f1ac-4bf5-9f0e-c963e94627b6",
          id_role: "6060df0f-646c-4e4b-bd2b-6b1645e101d3",
        },
      },
    },
  });
  console.log(new_user);
});

