import client from "../../src/database";

export default async function createDataDisciplines() {
  await client.discipline.create({
    data: {
      name: "Javascript",
      term: {
        create: {
          number: 1,
        },
      },
      teachers: {
        create: {
          teacher: {
            create: {
              name: "Dina",
            },
          },
          tests: {
            create: {
              name: "Repoprovas",
              pdfUrl:
                "https://bootcampra.notion.site/Projeto-18-RepoProvas-a091ca4b655149d0b18befa0a7cd3323",
              category: {
                create: {
                  name: "P2",
                },
              },
            },
          },
        },
      },
    },
  });
}
