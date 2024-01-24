import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

test("header asset maintenance schedule", async () => {
    //const asset = await get_asset()
    const asset_mnt_schedule = await db.maintenance_schedule.findUnique({
        where: { id: "0201b565-c38e-4445-a6d1-2cdfbe08ee41" },
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
     console.log(asset_mnt_schedule);
});


test("view maintenance schedule", async () => {
    //const asset = await get_asset()
    const view_mnt_schedule = await db.maintenance_schedule.findUnique({
        where: { id: "0201b565-c38e-4445-a6d1-2cdfbe08ee41" },
        select: {
            id: true,
            name: true,
            scheduled_at: true,
            assigned_to: true,
        },
    });
     console.log(view_mnt_schedule);
});