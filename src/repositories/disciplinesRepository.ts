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
                  id: true,
                  name: true,
                  pdfUrl: true,
                  views: true,
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

function getDisciplines() {
  return client.discipline.findMany();
}

export default { getObjectAllDisciplines, getDisciplines };
