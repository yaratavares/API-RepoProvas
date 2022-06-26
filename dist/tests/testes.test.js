var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import supertest from "supertest";
import app from "../src/app.js";
import client from "../src/database.js";
import bodyTest from "./factories/bodyTest.js";
import createDataTests from "./factories/createDataTests.js";
beforeEach(truncateTables);
afterAll(disconnect);
describe("Create test - POST /tests", function () {
    it("Should answer with status code 201 when create new test valid", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, categoryData, teacherDisciplineData, body, result, testCreated;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, createDataTests()];
                case 1:
                    _a = _b.sent(), categoryData = _a.categoryData, teacherDisciplineData = _a.teacherDisciplineData;
                    body = bodyTest(categoryData, teacherDisciplineData);
                    return [4 /*yield*/, supertest(app).post("/tests").send(body)];
                case 2:
                    result = _b.sent();
                    return [4 /*yield*/, client.test.findFirst({
                            where: { name: body.name }
                        })];
                case 3:
                    testCreated = _b.sent();
                    expect(result.status).toEqual(201);
                    expect(testCreated).not.toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should answer with status code 422 when post new test invalid", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, categoryData, teacherDisciplineData, body, result, testCreated;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, createDataTests()];
                case 1:
                    _a = _b.sent(), categoryData = _a.categoryData, teacherDisciplineData = _a.teacherDisciplineData;
                    body = bodyTest(categoryData, teacherDisciplineData);
                    delete body.name;
                    return [4 /*yield*/, supertest(app).post("/tests").send(body)];
                case 2:
                    result = _b.sent();
                    return [4 /*yield*/, client.test.findFirst({
                            where: { pdfUrl: body.pdfUrl }
                        })];
                case 3:
                    testCreated = _b.sent();
                    expect(result.status).toEqual(422);
                    expect(testCreated).toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("Update test - POST /tests/:id", function () {
    it("Should answer with status code 200 when send one post in test", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, categoryData, teacherDisciplineData, body, result, testCreated, updateTest;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, createDataTests()];
                case 1:
                    _a = _b.sent(), categoryData = _a.categoryData, teacherDisciplineData = _a.teacherDisciplineData;
                    body = bodyTest(categoryData, teacherDisciplineData);
                    return [4 /*yield*/, supertest(app).post("/tests").send(body)];
                case 2:
                    result = _b.sent();
                    return [4 /*yield*/, client.test.findFirst({
                            where: { name: body.name }
                        })];
                case 3:
                    testCreated = _b.sent();
                    return [4 /*yield*/, supertest(app).post("/tests/".concat(testCreated.id))];
                case 4:
                    updateTest = _b.sent();
                    expect(result.status).toEqual(201);
                    expect(updateTest.status).toEqual(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should answer with status code 404 when request test that does not exist", function () { return __awaiter(void 0, void 0, void 0, function () {
        var updateTest;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest(app).post("/tests/1")];
                case 1:
                    updateTest = _a.sent();
                    expect(updateTest.status).toEqual(404);
                    return [2 /*return*/];
            }
        });
    }); });
});
function truncateTables() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.$executeRaw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["TRUNCATE TABLE categories CASCADE"], ["TRUNCATE TABLE categories CASCADE"])))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, client.$executeRaw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["TRUNCATE TABLE teachers CASCADE"], ["TRUNCATE TABLE teachers CASCADE"])))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, client.$executeRaw(templateObject_3 || (templateObject_3 = __makeTemplateObject(["TRUNCATE TABLE terms CASCADE"], ["TRUNCATE TABLE terms CASCADE"])))];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, client.$executeRaw(templateObject_4 || (templateObject_4 = __makeTemplateObject(["TRUNCATE TABLE disciplines CASCADE"], ["TRUNCATE TABLE disciplines CASCADE"])))];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, client.$executeRaw(templateObject_5 || (templateObject_5 = __makeTemplateObject(["TRUNCATE TABLE tests CASCADE"], ["TRUNCATE TABLE tests CASCADE"])))];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function disconnect() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.$disconnect()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
