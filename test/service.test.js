const request = require("supertest");
const app = require("../app");
const {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
} = require("../models/services");
const { ERRORS } = require("../utils/constants");

jest.mock("../models/services");
jest.mock("../middleware/auth", () => ({
  auth: jest.fn((req, res, next) => {
    req.user = { id: 1, name: "Test User" };
    next();
  }),
}));

// Shared mock data
const mockServices = [
  {
    id: 1,
    name: "Service One",
    price: 100,
    duration: 60,
    description: "Service description",
    categoryId: "1",
    userId: "1",
  },
  {
    id: 2,
    name: "Service Two",
    price: 100,
    duration: 60,
    description: "Service description",
    categoryId: "1",
    userId: "1",
  },
];
const mockService = { id: 1, name: "Service 1" };
const newService = {
  id: 1,
  name: "New Service",
  price: 100,
  duration: 60,
  description: "Service description",
  categoryId: "1",
  userId: "1",
};
const updatedService = {
  id: 1,
  name: "Updated Service",
  price: 150,
  duration: 90,
};

describe("Service API", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("GET /api/service", () => {
    it("should return paginated list of services", async () => {
      getAllServices.mockResolvedValue({ services: mockServices, total: 10 });

      const res = await request(app)
        .get("/api/service")
        .query({ page: 1, limit: 10 });

      expect(res.status).toBe(200);
      expect(res.body.data).toEqual(mockServices);
      expect(res.body.totalItems).toBe(10);
      expect(res.body.page).toBe(1);
      expect(res.body.limit).toBe(10);
    });

    it("should return 400 for invalid pagination parameters", async () => {
      const res = await request(app)
        .get("/api/service")
        .query({ page: "abc", limit: "xyz" });

      expect(res.statusCode).toBe(400);
      expect(res.body.message).toBe(ERRORS.INVALID_PAGE_OR_LIMIT);
    });
  });

  describe("GET /api/service/:id", () => {
    it("should return the service by ID", async () => {
      getServiceById.mockResolvedValue(mockService);

      const res = await request(app).get("/api/service/1");

      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockService);
    });

    it("should return 404 if service not found", async () => {
      getServiceById.mockResolvedValue(null);

      const res = await request(app).get("/api/service/999");

      expect(res.status).toBe(404);
      expect(res.body.message).toBe(ERRORS.SERVICE_NOT_FOUND);
    });
  });

  describe("POST /api/service/add", () => {
    it("should create a new service", async () => {
      createService.mockResolvedValue(newService);

      const res = await request(app).post("/api/service/add").send({
        name: "New Service",
        price: 100,
        duration: 60,
        description: "Service description",
        categoryId: "1",
        userId: "1",
      });

      expect(res.status).toBe(201);
      expect(res.body).toEqual(newService);
    });

    it("should return 400 if required fields are missing", async () => {
      const res = await request(app)
        .post("/api/service/add")
        .send({ price: 100 });

      expect(res.status).toBe(400);
      expect(res.body.message).toBe(ERRORS.NAME_REQUIRED);
    });
  });

  describe("PUT /api/service/edit/:id", () => {
    it("should update the service", async () => {
      getServiceById.mockResolvedValue({ id: 1 });
      updateService.mockResolvedValue(updatedService);

      const res = await request(app).put("/api/service/edit/1").send({
        name: "Updated Service",
        price: 150,
        duration: 90,
      });

      expect(res.status).toBe(200);
      expect(res.body).toEqual(updatedService);
    });

    it("should return 404 if service not found", async () => {
      getServiceById.mockResolvedValue(null);

      const res = await request(app).put("/api/service/edit/999").send({
        name: "Updated Service",
        price: 150,
        duration: 90,
      });

      expect(res.status).toBe(404);
      expect(res.body.message).toBe(ERRORS.SERVICE_NOT_FOUND);
    });
  });

  describe("DELETE /api/service/remove/:id", () => {
    it("should delete the service", async () => {
      getServiceById.mockResolvedValue({ id: 1 });
      deleteService.mockResolvedValue();

      const res = await request(app).delete("/api/service/remove/1");

      expect(res.status).toBe(204);
      expect(res.body).toEqual({});
    });

    it("should return 404 if service not found", async () => {
      getServiceById.mockResolvedValue(null);

      const res = await request(app).delete("/api/service/remove/999");

      expect(res.status).toBe(404);
      expect(res.body.message).toBe(ERRORS.SERVICE_NOT_FOUND);
    });
  });
});
