import client from "../database.js";
function findByUserId(userId) {
    return client.session.findFirst({ where: { userId: userId } });
}
function create(newSession) {
    return client.session.create({ data: newSession });
}
function update(session, token) {
    return client.session.update({
        where: { userId_token: { userId: session.userId, token: session.token } },
        data: { token: token }
    });
}
function findByToken(token) {
    return client.session.findFirst({ where: { token: token } });
}
export default { findByUserId: findByUserId, create: create, update: update, findByToken: findByToken };
