import client from "../database.js";

function getObjectAllDisciplines(inputSearch: string | null) {
  return client.term.findMany({
    select: {
      number: true,
      discipline: {
        select: {
          name: true,
          teachers: {
            select: {
              teacher: {
                select: {
                  name: true,
                },
              },
              tests: {
                select: {
                  name: true,
                  pdfUrl: true,
                  category: {
                    select: {
                      name: true,
                    },
                  },
                },
              },
            },
          },
        },
        where: {
          name: {
            startsWith: inputSearch !== null ? inputSearch : "",
            mode: "insensitive",
          },
        },
      },
    },
  });
}

export default { getObjectAllDisciplines };
