const request = require("supertest");
const app = require("../app");
const { prisma } = require("../prisma/prisma-client.js");
const { ERRORS } = require("../utils/constants");

// Mock Prisma client methods
jest.mock("../prisma/prisma-client", () => ({
  prisma: {
    client: {
      findMany: jest.fn(),
      count: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  },
}));

// Test data constants
const mockClient = { id: 1, name: "Client One", phoneNumber: "1234567890" };
const mockClients = [
  { id: 1, name: "Client One", phoneNumber: "1234567890" },
  { id: 2, name: "Client Two", phoneNumber: "0987654321" },
];
const totalClients = 20;

describe("Client API", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("GET /api/client", () => {
    it("should return paginated list of clients", async () => {
      prisma.client.findMany.mockResolvedValue(mockClients);
      prisma.client.count.mockResolvedValue(totalClients);

      const res = await request(app)
        .get("/api/client")
        .query({ page: 1, limit: 10 });

      expect(res.status).toBe(200);
      expect(res.body.data).toEqual(mockClients);
      expect(res.body.page).toBe(1);
      expect(res.body.limit).toBe(10);
      expect(res.body.totalPages).toBe(Math.ceil(totalClients / 10));
      expect(res.body.totalItems).toBe(totalClients);
    });
  });

  describe("GET /api/client/:id", () => {
    it("should return a client by ID", async () => {
      prisma.client.findUnique.mockResolvedValue(mockClient);

      const res = await request(app).get("/api/client/1");

      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockClient);
    });

    it("should return 404 if client not found", async () => {
      prisma.client.findUnique.mockResolvedValue(null);

      const res = await request(app).get("/api/client/999");

      expect(res.status).toBe(404);
      expect(res.body.error).toBe(ERRORS.CLIENT_NOT_FOUND);
    });
  });

  describe("POST /api/client/add", () => {
    it("should create a new client with valid input", async () => {
      const reqBody = { name: "New Client", phoneNumber: "1234567890" };
      prisma.client.create.mockResolvedValue({ id: 1, ...reqBody });

      const res = await request(app).post("/api/client/add").send(reqBody);

      expect(res.status).toBe(201);
      expect(res.body).toEqual({ id: 1, ...reqBody });
    });

    it("should return 400 if required fields are missing", async () => {
      const res = await request(app)
        .post("/api/client/add")
        .send({ nickName: "Optional Nickname" });

      expect(res.status).toBe(400);
      expect(res.body.error).toBe(ERRORS.NAME_REQUIRED);
    });

    it("should return 400 if name is empty", async () => {
      const res = await request(app)
        .post("/api/client/add")
        .send({ name: "", phoneNumber: "1234567890" });

      expect(res.status).toBe(400);
      expect(res.body.error).toBe(ERRORS.NAME_EMPTY);
    });
  });

  describe("PUT /api/client/edit/:id", () => {
    beforeEach(() => {
      prisma.client.findUnique.mockResolvedValue(mockClient); // Set up client exists for edit
    });

    it("should update an existing client", async () => {
      const updatedClient = {
        id: 1,
        name: "Updated Client",
        phoneNumber: "0987654321",
      };
      prisma.client.update.mockResolvedValue(updatedClient);

      const res = await request(app)
        .put("/api/client/edit/1")
        .send({ name: "Updated Client", phoneNumber: "0987654321" });

      expect(res.status).toBe(200);
      expect(res.body).toEqual(updatedClient);
    });

    it("should return 404 if client not found", async () => {
      prisma.client.findUnique.mockResolvedValue(null); // Simulate client not found

      const res = await request(app)
        .put("/api/client/edit/999")
        .send({ name: "Updated Client", phoneNumber: "0987654321" });

      expect(res.status).toBe(404);
      expect(res.body.error).toBe(ERRORS.CLIENT_NOT_FOUND);
    });

    it("should return 400 if name is empty", async () => {
      const res = await request(app)
        .put("/api/client/edit/1")
        .send({ name: "", phoneNumber: "1234567890" });

      expect(res.status).toBe(400);
      expect(res.body.error).toBe(ERRORS.NAME_EMPTY);
    });
  });

  describe("DELETE /api/client/remove/:id", () => {
    beforeEach(() => {
      prisma.client.findUnique.mockResolvedValue(mockClient); // Setup client exists for delete
    });

    it("should delete an existing client", async () => {
      prisma.client.delete.mockResolvedValue(); // Successful delete response

      const res = await request(app).delete("/api/client/remove/1");

      expect(res.status).toBe(204);
      expect(res.body).toEqual({});
    });

    it("should return 404 if client not found", async () => {
      prisma.client.findUnique.mockResolvedValue(null); // Simulate client not found

      const res = await request(app).delete("/api/client/remove/999");

      expect(res.status).toBe(404);
      expect(res.body.error).toBe(ERRORS.CLIENT_NOT_FOUND);
    });
  });
});
