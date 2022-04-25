import client from "../database.js";

function getObjectAllDisciplines() {
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
      },
    },
  });
}

function getObjectAllTeachers() {
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
  });
}

export default { getObjectAllDisciplines, getObjectAllTeachers };
