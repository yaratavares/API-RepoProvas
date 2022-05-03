import client from "../../src/database";

export default async function createDataTests() {
  const categoryData = await client.category.create({
    data: {
      name: "Final",
    },
  });

  const teacherDisciplineData = await client.teacherDiscipline.create({
    data: {
      discipline: {
        create: {
          name: "Bananinha",
          term: {
            create: {
              number: 1,
            },
          },
        },
      },
      teacher: {
        create: {
          name: "Dina",
        },
      },
    },
  });

  return { categoryData, teacherDisciplineData };
}
