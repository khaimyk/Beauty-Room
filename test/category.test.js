const request = require("supertest");
const app = require("../app");
const { prisma } = require("../prisma/prisma-client");
const { ERRORS } = require("../utils/constants"); // Assuming error messages are centralized

// Mock Prisma client
jest.mock("../prisma/prisma-client", () => ({
  prisma: {
    category: {
      count: jest.fn(),
      create: jest.fn(),
      findUnique: jest.fn(),
      findMany: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  },
}));

jest.mock("../middleware/auth", () => ({
  auth: jest.fn((req, res, next) => {
    req.user = { id: 1, name: "Test User" };
    next();
  }),
}));

const mockCategory = { id: 1, name: "Category One" };
const mockCategories = [
  { id: 1, name: "Category One" },
  { id: 2, name: "Category Two" },
];
const mockTotal = 20;

describe("Category API", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("GET /api/category", () => {
    it("should return paginated list of categories", async () => {
      prisma.category.findMany.mockResolvedValue(mockCategories);
      prisma.category.count.mockResolvedValue(mockTotal);

      const res = await request(app)
        .get("/api/category")
        .query({ page: 1, limit: 10 });

      expect(res.status).toBe(200);
      expect(res.body.data).toEqual(mockCategories);
      expect(res.body.page).toBe(1);
      expect(res.body.limit).toBe(10);
      expect(res.body.totalPages).toBe(Math.ceil(mockTotal / 10));
      expect(res.body.totalItems).toBe(mockTotal);
    });
  });

  describe("GET /api/category/:id", () => {
    it("should return a category by ID", async () => {
      prisma.category.findUnique.mockResolvedValue(mockCategory);

      const res = await request(app).get("/api/category/1");

      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockCategory);
    });

    it("should return 404 if category not found", async () => {
      prisma.category.findUnique.mockResolvedValue(null);

      const res = await request(app).get("/api/category/999");

      expect(res.status).toBe(404);
      expect(res.body.message).toBe(ERRORS.CATEGORY_NOT_FOUND);
    });
  });

  describe("POST /api/category/add", () => {
    it("should create a new category with valid request body", async () => {
      const reqBody = { name: "New Category", userId: "1" };
      prisma.category.create.mockResolvedValue({ id: 1, name: reqBody.name });

      const res = await request(app).post("/api/category/add").send(reqBody);

      expect(res.status).toBe(201);
      expect(res.body).toEqual({ id: 1, name: reqBody.name });
    });

    it("should return 401 if userId is missing in request body", async () => {
      const res = await request(app)
        .post("/api/category/add")
        .send({ name: "New Category" });

      expect(res.status).toBe(401);
      expect(res.body.message).toBe(ERRORS.AUTH_REQUIRED);
    });

    it("should return 400 if name is missing in request body", async () => {
      const res = await request(app)
        .post("/api/category/add")
        .send({ userId: "1" });

      expect(res.status).toBe(400);
      expect(res.body.message).toBe(ERRORS.NAME_REQUIRED);
    });

    it("should return 500 if prisma.category.create fails", async () => {
      prisma.category.create.mockRejectedValue(new Error("Test error"));

      const res = await request(app)
        .post("/api/category/add")
        .send({ name: "New Category", userId: "1" });

      expect(res.status).toBe(500);
      expect(res.body.message).toBe(ERRORS.TEST_ERROR);
    });
  });

  describe("PUT /api/category/edit/:id", () => {
    beforeEach(() => {
      prisma.category.findUnique.mockResolvedValue(mockCategory);
    });

    it("should update an existing category", async () => {
      const updatedCategory = { id: 1, name: "Updated Category" };
      prisma.category.update.mockResolvedValue(updatedCategory);

      const res = await request(app)
        .put("/api/category/edit/1")
        .send({ name: "Updated Category" });

      expect(res.status).toBe(200);
      expect(res.body).toEqual(updatedCategory);
    });

    it("should return 404 if category not found", async () => {
      prisma.category.findUnique.mockResolvedValue(null);

      const res = await request(app)
        .put("/api/category/edit/999")
        .send({ name: "Updated Category" });

      expect(res.status).toBe(404);
      expect(res.body.message).toBe(ERRORS.CATEGORY_NOT_FOUND);
    });

    it("should return 400 if name is empty", async () => {
      const res = await request(app)
        .put("/api/category/edit/1")
        .send({ name: "" });

      expect(res.status).toBe(400);
      expect(res.body.message).toBe(ERRORS.NAME_EMPTY);
    });
  });

  describe("DELETE /api/category/remove/:id", () => {
    beforeEach(() => {
      prisma.category.findUnique.mockResolvedValue(mockCategory);
    });

    it("should delete an existing category", async () => {
      prisma.category.delete.mockResolvedValue();

      const res = await request(app).delete("/api/category/remove/1");

      expect(res.status).toBe(204);
      expect(res.body).toEqual({});
    });

    it("should return 404 if category not found", async () => {
      prisma.category.findUnique.mockResolvedValue(null);

      const res = await request(app).delete("/api/category/remove/999");

      expect(res.status).toBe(404);
      expect(res.body.message).toBe(ERRORS.CATEGORY_NOT_FOUND);
    });
  });
});
