const request = require("supertest");
const app = require("../app"); // Import your Express app
const { prisma } = require("../prisma/prisma-client"); // Import prisma client
const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const { ERRORS } = require("../utils/constants");

// Mock dependencies
jest.mock("../prisma/prisma-client", () => ({
  prisma: {
    user: {
      findFirst: jest.fn(),
      create: jest.fn(),
      findUnique: jest.fn(), // Add this
      findMany: jest.fn(), // Add this
      update: jest.fn(), // Add this
      delete: jest.fn(),
    },
  },
}));
jest.mock("../middleware/auth", () => ({
  auth: jest.fn((req, res, next) => {
    req.user = { id: 1, name: "Test User" }; // mock user data
    next();
  }),
}));

jest.mock("bcrypt", () => ({
  compare: jest.fn(),
  genSalt: jest.fn(() => Promise.resolve("salt")),
  hash: jest.fn(() => Promise.resolve("hashedPassword")),
}));

jest.mock("jsonwebtoken", () => ({
  sign: jest.fn(() => "testtoken"),
}));

afterEach(() => {
  jest.clearAllMocks();
});
// Extend timeout globally

//login

describe("POST /api/user/login", () => {
  it("should return 400 if email or password is missing", async () => {
    const res = await request(app).post("/api/user/login").send({});
    expect(res.status).toBe(400);
    expect(res.body.message).toBe(ERRORS.NAME_ALL_REQUIRED);
  });

  it("should return 400 if email or password is incorrect", async () => {
    const user = { email: "test@example.com", password: "hashedpassword" };
    prisma.user.findFirst.mockResolvedValue(user);
    bcrypt.compare.mockResolvedValue(false);

    const res = await request(app)
      .post("/api/user/login")
      .send({ email: "test@example.com", password: "wrongpassword" });

    expect(res.status).toBe(400);
    expect(res.body.message).toBe(ERRORS.USER_NOT_FOUND);
  });

  it("should return 200 with token if email and password are correct", async () => {
    const user = {
      id: 1,
      email: "test@example.com",
      password: "hashedpassword",
      name: "Test",
    };
    prisma.user.findFirst.mockResolvedValue(user);
    bcrypt.compare.mockResolvedValue(true);

    const res = await request(app)
      .post("/api/user/login")
      .send({ email: "test@example.com", password: "password" });

    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      id: user.id,
      email: user.email,
      name: user.name,
      token: "testtoken",
    });
  });

  it("should return 400 if server error occurs", async () => {
    prisma.user.findFirst.mockRejectedValue(new Error("Server error"));

    const res = await request(app)
      .post("/api/user/login")
      .send({ email: "test@example.com", password: "password" });

    expect(res.status).toBe(400);
    expect(res.body.message).toBe(ERRORS.USER_NOT_FOUND);
  });
});

// register

describe("POST /api/user/register", () => {
  it("should return 400 if email or password or name is missing", async () => {
    const res = await request(app).post("/api/user/register").send({});
    expect(res.status).toBe(400);
    expect(res.body.message).toBe(ERRORS.LOGIN_FORMAT);
  });

  it("should return 400 if email already exists", async () => {
    prisma.user.findFirst.mockResolvedValue({ email: "existing@example.com" });
    const res = await request(app).post("/api/user/register").send({
      email: "existing@example.com",
      password: "password",
      name: "Name",
    });
    expect(res.status).toBe(400);
    expect(res.body.message).toBe(ERRORS.USER_ALREADY_EXISTS);
  });

  it("should create a new user and return 201", async () => {
    prisma.user.findFirst.mockResolvedValue(null);
    prisma.user.create.mockResolvedValue({
      id: 1,
      email: "new@example.com",
      name: "New Name",
    });
    const res = await request(app).post("/api/user/register").send({
      email: "new@example.com",
      password: "password",
      name: "New Name",
    });
    expect(res.status).toBe(201);
    expect(res.body).toMatchObject({
      id: 1,
      email: "new@example.com",
      name: "New Name",
      token: "testtoken",
    });
  });

  it("should return 400 if server error occurs", async () => {
    prisma.user.create.mockRejectedValue(new Error("Server error"));
    const res = await request(app).post("/api/user/register").send({
      email: "new@example.com",
      password: "password",
      name: "New Name",
    });
    expect(res.status).toBe(500);
    expect(res.body.message).toBe(ERRORS.USER_NOT_FOUND);
  });

  it("should return 400 if JWT secret is missing", async () => {
    process.env.JWT_SECRET = "";
    const res = await request(app).post("/api/user/register").send({
      email: "new@example.com",
      password: "password",
      name: "New Name",
    });
    expect(res.status).toBe(500);
    expect(res.body.message);
  });
});

// edit

describe("PUT /api/user/edit/:id", () => {
  it("should return 404 if user is not found", async () => {
    prisma.user.findUnique.mockResolvedValue(null);

    const res = await request(app)
      .put("/api/user/edit/1")
      .send({ email: "new@example.com", name: "New Name" });

    expect(res.status).toBe(404);
    expect(res.body.message);
  });

  it("should update user data and return 200", async () => {
    const user = { id: 1, email: "old@example.com", name: "Old Name" };
    const updatedUser = {
      ...user,
      email: "new@example.com",
      name: "New Name",
    };

    prisma.user.findUnique.mockResolvedValue(user);
    prisma.user.update.mockResolvedValue(updatedUser);

    const res = await request(app).put("/api/user/edit/1").send({
      email: "new@example.com",
      name: "New Name",
      password: "newpassword",
    });

    expect(res.status).toBe(200);
    expect(res.body).toMatchObject(updatedUser);
  });
});
it("should update user password and return 200", async () => {
  const user = { id: 1, email: "old@example.com", name: "Old Name" };
  const updatedUser = { ...user, password: "hashedpassword" };
  prisma.user.findUnique.mockResolvedValue(user);
  prisma.user.update.mockResolvedValue(updatedUser);
  const res = await request(app)
    .put("/api/user/edit/1")
    .send({ password: "newpassword" });

  expect(res.status).toBe(200);
  expect(res.body).toMatchObject({
    id: user.id,
    email: user.email,
    name: user.name,
  });
});
it("should return 500 if server error occurs", async () => {
  prisma.user.findUnique.mockRejectedValue(new Error("Server error"));
  const res = await request(app)
    .put("/api/user/edit/1")
    .send({ email: "new@example.com", name: "New Name" });

  expect(res.status).toBe(500);
  expect(res.body.message).toBe(ERRORS.USER_NOT_REFRESH);
});

//delete

describe("DELETE /api/user/remove/:id", () => {
  it("should return 404 if user is not found", async () => {
    prisma.user.findUnique.mockResolvedValue(null);

    const res = await request(app).delete("/api/user/1");

    expect(res.status).toBe(404);
    expect(res.body.message);
  });

  it("should delete the user and return 200", async () => {
    const user = {
      id: 1,
      email: "user@example.com",
      password: "password",
      name: "User",
      image: null,
    };
    prisma.user.findUnique.mockResolvedValue(user);
    prisma.user.delete.mockResolvedValue(user);

    const res = await request(app).delete("/api/user/remove/1");

    expect(res.status).toBe(200);
    expect(res.body.message).toBe(ERRORS.USER_DELETED);
  });
});

//all

describe("GET /api/user", () => {
  it("should return 200 with list of users", async () => {
    const users = [
      { id: 1, email: "user1@example.com", name: "User One" },
      { id: 2, email: "user2@example.com", name: "User Two" },
    ];
    prisma.user.findMany.mockResolvedValue(users);

    const res = await request(app).get("/api/user");
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual(users);
  });

  it("should return 500 if a server error occurs", async () => {
    prisma.user.findMany.mockRejectedValue(new Error("Server error"));

    const res = await request(app).get("/api/user");
    expect(res.status).toBe(500);
    expect(res.body).toStrictEqual({
      message: ERRORS.USER_NOT_FOUND,
    });
  });

  it("should return 200 with an empty list of users", async () => {
    prisma.user.findMany.mockResolvedValue([]);

    const res = await request(app).get("/api/user");
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual([]);
  });

  it("should return 200 with a list of multiple users", async () => {
    const users = [
      { id: 1, email: "user1@example.com", name: "User One" },
      { id: 2, email: "user2@example.com", name: "User Two" },
      { id: 3, email: "user3@example.com", name: "User Three" },
    ];
    prisma.user.findMany.mockResolvedValue(users);

    const res = await request(app).get("/api/user");
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual(users);
  });
});

// current
describe("GET /api/user/current", () => {
  it("should return 200 if user is authenticated", async () => {
    const user = { id: 1, name: "John Doe" }; // mock user object
    const req = { user };
    const res = await request(app).get("/api/user/current").set("user", user);
    expect(res.status).toBe(200);
  });
});
