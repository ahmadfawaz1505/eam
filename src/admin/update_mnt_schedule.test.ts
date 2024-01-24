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


test("update maintenance schedule", async () => {
    //const asset = await get_asset()
    const update_mnt_schedule = await db.maintenance_schedule.update({
        where: { id: "0201b565-c38e-4445-a6d1-2cdfbe08ee41" },
        data: {
            name: "Maintenance ganti schedule",
            scheduled_at: "2024-01-25T07:38:48.793Z",
            assigned_to: "67f64a2c-8ca6-49fe-94b2-de07ca907768",
            updated_at: new Date(),
            updated_by: "294d4986-f1ac-4bf5-9f0e-c963e94627b6",
        },
    });
     console.log(update_mnt_schedule);
});