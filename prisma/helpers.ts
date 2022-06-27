import { prisma } from "./seed.js";

export function populateCategories(){
    return prisma.category.createMany({
        data: [
            {
                id: 1,
                name: 'P1'
            },
            {
                id: 2,
                name: 'P2'
            },
            {
                id: 3,
                name: 'P3'
            },
            {
                id: 4,
                name: 'Final'
            }
        ]
        
    })

}

export function populateTeachers(){
    return prisma.teacher.createMany({
        data: [
            {
                id: 1,
                name: 'Dina',
            },
            {
                id: 2,
                name: 'Pedrão'
            },
            {
                id: 3,
                name: 'Bruninha'
            },
            {
                id: 4,
                name: 'Rita'
            }
        ]
    })
}

export function populateTeachersDisciplines(){
    return prisma.teacherDiscipline.createMany({
        data: [
            {
                teacherId: 1,
                disciplineId: 1
            },
            {
                teacherId: 2,
                disciplineId: 1
            },
            {
                teacherId: 1,
                disciplineId: 3
            },
            {
                teacherId: 1,
                disciplineId: 4
            },
            {
                teacherId: 3,
                disciplineId: 1
            },
            {
                teacherId: 3,
                disciplineId: 2
            },
            {
                teacherId: 4,
                disciplineId: 4
            }, 
            {
                teacherId: 4,
                disciplineId: 1
            },
            {
                teacherId: 1,
                disciplineId: 11,
            }
        ]
    })
}

export function populateTerms(){
    return prisma.term.createMany({
        data: [
            {number: 1},
            {number: 2},
            {number: 3},
            {number: 4},
            {number: 5}
        ]
    })
}

export function populateDisciplines(){
    return prisma.discipline.createMany({
        data: [
            {name: 'HTML', termId: 1},
            {name: 'CSS', termId: 1},
            {name: 'Javascript', termId: 1},
            {name: 'React', termId: 2},
            {name: 'Node.js', termId: 2},
            {name: 'MongoDB', termId: 3},
            {name: 'PostgreSQL', termId: 3},
            {name: 'PrismaORM', termId: 4},
            {name: 'Redis', termId: 4},
            {name: 'Docker', termId: 4},
            {name: 'Typescript',termId: 4},
            {name: 'Inteligência emocional', termId: 5},
            {name: 'Carreiras', termId: 5}
        ]
    })
}

export function populateTests(){
    return prisma.test.createMany({
        data: [
            {
                name: 'beautysalon',
                pdfUrl: 'https://github.com/yaratavares/beautysalon.',
                categoryId: 1,
                teacherDisciplineId: 1
            },
            {
                name: 'Instagram',
                pdfUrl: 'https://github.com/yaratavares/Instagram',
                categoryId: 2,
                teacherDisciplineId: 2
            },
            {
                name: 'ZapRecall',
                pdfUrl: 'https://github.com/yaratavares/ZapRecall',
                categoryId: 3,
                teacherDisciplineId: 4
            },
            {
                name: 'Cineflex',
                pdfUrl: 'https://github.com/yaratavares/CineFlex',
                categoryId: 4,
                teacherDisciplineId: 4
            },
            {
                name: 'Parrot-Card-Game',
                pdfUrl: 'https://github.com/yaratavares/Parrot-Card-Game',
                categoryId: 3,
                teacherDisciplineId: 3
            },
            {
                name: 'TrackIt',
                pdfUrl: 'https://github.com/yaratavares/TrackIt',
                categoryId: 3,
                teacherDisciplineId: 9
            }
        ]
    })
}