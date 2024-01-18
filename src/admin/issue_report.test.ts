test("Issue Report", async () => {
    const result = await db.inspection_details.findMany({
      where: {},
      select: {
        id: true,
        name: true,
        scheduled_at: true,
      },
    });
  
    //   console.log(result);
  });