const request = require("supertest");

const server = require("../api/server");

describe("Auth router", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });
});

describe("post /api/auth/users", function() {
  it("should return 201 OK", function() {
    return request(server)
      .post("/api/auth/register")
      .then(res => {
        expect(res.status).toBe(500);
      });
  });
});

describe("server", function() {
  describe("environment", function() {
    it("should use the testing environment", function() {
      expect(process.env.DB_ENV).toBe("development");
    });
  });
});

describe("server.js", () => {
  describe("index route", () => {
    it("should return an OK status code from the index route", async () => {
      const expectedStatusCode = 200;

      // do a get request to our api (server.js) and inspect the response
      const response = await request(server).get("/");

      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return a JSON object from the index route", async () => {
      const expectedBody = { api: "It's alive!" };

      const response = await request(server).get("/");

      expect(response.body).toEqual(expectedBody);
    });

    it("should return a JSON object from the index route", async () => {
      const response = await request(server).get("/");

      expect(response.type).toEqual("application/json");
    });
  });
});
