import client from "../database.js";

function getObjectAllTeachers(inputSearch: string | null) {
  return client.teacher.findMany({
    select: {
      name: true,
      disciplines: {
        select: {
          tests: {
            select: {
              name: true,
              pdfUrl: true,
              category: {
                select: {
                  name: true,
                },
              },
              teacherDiscipline: {
                select: {
                  discipline: {
                    select: {
                      name: true,
                    },
                  },
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
  });
}

function getTeachers() {
  return client.teacherDiscipline.findMany({
    select: {
      id: true,
      teacher: {
        select: {
          name: true,
        },
      },
      discipline: {
        select: {
          id: true,
        },
      },
    },
  });
}

export default { getObjectAllTeachers, getTeachers };
