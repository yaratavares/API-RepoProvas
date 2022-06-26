var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import client from "../database.js";
function insert(newUser) {
    return client.user.create({
        data: newUser
    });
}
function findByEmail(email) {
    return client.user.findFirst({ where: { email: email } });
}
function findByGithubId(githubId) {
    return client.user.findFirst({ where: { githubId: githubId } });
}
function truncate() {
    return client.$executeRaw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["TRUNCATE TABLE users, sessions"], ["TRUNCATE TABLE users, sessions"])));
}
export default { insert: insert, findByEmail: findByEmail, findByGithubId: findByGithubId, truncate: truncate };
var templateObject_1;
