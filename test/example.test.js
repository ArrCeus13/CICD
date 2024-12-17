const request = require("supertest");
const app = request("../src/index.js");

describe("GET /", () => {
    it("should return hello world", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual("Arriza Fajar Zhafar Yasar");
    });
});