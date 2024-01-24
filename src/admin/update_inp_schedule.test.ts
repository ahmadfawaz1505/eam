import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("header asset inspection schedule", async () => {
    //const asset = await get_asset()
    const asset_inp_schedule = await db.inspection_schedule.findUnique({
        where: { id: "cd7ddbb1-2928-4bc5-ac62-40d0e23aaa44" },
        select: {
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
    // console.log(asset_inp_schedule);
});


test("update inspection schedule", async () => {
    //const asset = await get_asset()
    const update_inp_schedule = await db.inspection_schedule.update({
        where: { id: "cd7ddbb1-2928-4bc5-ac62-40d0e23aaa44" },
        data: {
            name: "Inspeksi ganti schedule",
            scheduled_at: "2024-01-25T07:38:48.793Z",
            assigned_to: "dd226c0d-bda3-4862-97fc-9ff6e7dd2183",
            updated_at: new Date(),
            updated_by: "294d4986-f1ac-4bf5-9f0e-c963e94627b6",
        },
    });
    // console.log(update_inp_schedule);
});