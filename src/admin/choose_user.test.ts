import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("choose user inspector", async () => {
  const choose_user = await db.m_user.findMany({
    where : { user_role: {every: {id_role: "6060df0f-646c-4e4b-bd2b-6b1645e101d3"}}},
    select: {
      id: true,
      name: true,
      email: true,
      created_by: true,
    },
  });
   // console.log(choose_user);
});

test("choose user maintenance", async () => {
  const choose_user = await db.m_user.findMany({
    where : { user_role: {every: {id_role: "1ca7909d-9e4f-4926-8507-fddd5654c49b"}}},
    select: {
      id: true,
      name: true,
      email: true,
      created_by: true,
    },
  });
    // console.log(choose_user);
});

test("choose user user", async () => {
  const choose_user = await db.m_user.findMany({
    where : { user_role: {every: {id_role: "6fc4e662-049d-4d32-a233-70fa08ba3e15"}}},
    select: {
      id: true,
      name: true,
      email: true,
      created_by: true,
    },
  });
    // console.log(choose_user);
});

test("choose user vendor", async () => {
  const choose_user = await db.m_user.findMany({
    where : { user_role: {every: {id_role: "cef92039-9e63-4750-ac45-a245e274fd4a"}}},
    select: {
      id: true,
      name: true,
      email: true,
      created_by: true,
    },
  });
    // console.log(choose_user);
});

test("choose user admin", async () => {
  const choose_user = await db.m_user.findMany({
    where : { user_role: {every: {id_role: "8ac3fe7f-3db5-45ca-8413-a3f5498725d7"}}},
    select: {
      id: true,
      name: true,
      email: true,
      created_by: true,
    },
  });
    // console.log(choose_user);
});