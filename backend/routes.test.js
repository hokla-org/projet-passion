const express = require("express");
const request = require("supertest");
const server = require("./routes.js");
const app = express();

describe("routes", () => {
  it("GET / should return Hello world !", async () => {
    const result = await request(server)
      .get("/")
      .set("Accept", "application/json");
    expect(result.text).toBe("Hello world !");
  });
});
