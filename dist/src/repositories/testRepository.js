import client from "../database.js";
function create(test) {
    return client.test.create({
        data: {
            name: test.name,
            pdfUrl: test.pdfUrl,
            categoryId: test.categoryId,
            teacherDisciplineId: test.teacherDisciplineId
        }
    });
}
function findTest(id) {
    return client.test.findFirst({
        where: {
            id: id
        }
    });
}
function updateViews(id) {
    return client.test.update({
        where: {
            id: id
        },
        data: {
            views: {
                increment: 1
            }
        }
    });
}
export default { create: create, findTest: findTest, updateViews: updateViews };
