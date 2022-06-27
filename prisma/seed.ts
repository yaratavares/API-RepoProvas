import pkg from "@prisma/client";
import { populateCategories, populateDisciplines, populateTeachers, populateTeachersDisciplines, populateTerms, populateTests } from "./helpers.js";
const {PrismaClient} = pkg;
export const prisma = new PrismaClient();

async function main() {
    let categories = await prisma.category.findFirst();
    let teachers = await prisma.teacher.findFirst();
    let disciplines = await prisma.discipline.findFirst();
    let terms = await prisma.term.findFirst();
    let teacherDisciplines = await prisma.teacherDiscipline.findFirst();
    let tests = await prisma.test.findFirst();

    if(!categories) {
        await populateCategories();
        
        if(!teachers){
            await populateTeachers();

            if(!terms){
                await populateTerms();
                
                if(!disciplines){
                    await populateDisciplines();
                    
                    if(!teacherDisciplines){
                        await populateTeachersDisciplines();

                        if(!tests){
                            await populateTests()
                        }
                    }
                }
            }
        }
    }

}

main().catch((e) => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect
})