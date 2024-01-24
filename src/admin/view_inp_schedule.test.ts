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


test("view inspection schedule", async () => {
    //const asset = await get_asset()
    const view_inp_schedule = await db.inspection_schedule.findUnique({
        where: { id: "cd7ddbb1-2928-4bc5-ac62-40d0e23aaa44" },
        select: {
            id: true,
            name: true,
            scheduled_at: true,
            assigned_to: true,
        },
    });
    // console.log(view_inp_schedule);
});