import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("list inspection schedule", async () => {
  const result = await db.inspection_record.findMany({
    select: {
      id: true,
      result: true,
      m_asset: {
        select: {
          id: true,
          name: true,
          category: {
            select: {
              id: true,
              name: true,
            },
          },
          location: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  // console.log(result);
});

// include: {
//   location: {
//     select: {
//       name: true,
//     },
//   },
// },
