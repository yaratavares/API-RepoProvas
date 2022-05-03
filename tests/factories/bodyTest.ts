import { Category, TeacherDiscipline } from "@prisma/client";

export default function bodyTest(
  category: Category,
  teacherDiscipline: TeacherDiscipline
) {
  return {
    name: "Repoprovas",
    pdfUrl:
      "https://bootcampra.notion.site/Projeto-18-RepoProvas-a091ca4b655149d0b18befa0a7cd3323",
    categoryId: category.id,
    teacherDisciplineId: teacherDiscipline.id,
  };
}
