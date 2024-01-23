import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("mop update", async () => {
  const result = await db.mop_material.update({
    where: { id: "796d3a05-5f85-4976-b80c-90e8325147bb" },
    data: {
      mo_plan_mop_material_id_mo_planTomo_plan: {
        connect: {
          id: "eda85abb-c037-4690-b691-79449605b36c",
          name: "servis hp terbaari",
        },
      },
      quantity: 1,
      price: 132000,
      // created_by:"eb34d583-7fd8-4fc7-9435-98d7ab247b30",
      m_user_mop_material_created_byTom_user: {
        connect: {
          id: "eb34d583-7fd8-4fc7-9435-98d7ab247b30",
        },
      },
      // created_by: {
      //   connect: {
      //     id: "eb34d583-7fd8-4fc7-9435-98d7ab247b30",
      //   },
      // },
    },
  });

  //   console.log(result);
});
