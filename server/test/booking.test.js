const request = require("supertest");
const app = require("../app"); // Replace with actual path to your app
const { prisma } = require("../prisma/prisma-client.js");
const { ERRORS } = require("../utils/constants");

jest.mock("../prisma/prisma-client", () => ({
  prisma: {
    booking: {
      findMany: jest.fn(),
      count: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    user: {
      findUnique: jest.fn(),
    },
    service: {
      findUnique: jest.fn(),
    },
  },
}));

// Clear mocks after each test
afterEach(() => {
  jest.clearAllMocks();
});

// Mock User and Service Existence
const mockUserAndServiceExist = () => {
  prisma.user.findUnique.mockResolvedValue({ id: "1", name: "Test User" });
  prisma.service.findUnique.mockResolvedValue({
    id: "1",
    name: "Test Service",
  });
};

// Helper for booking mock data
const bookingDataMock = (overrides = {}) => ({
  id: "1",
  userId: "1",
  serviceId: "1",
  date: "2023-11-01T00:00:00.000Z",
  notes: "Test note",
  time: "10:00",
  user: { id: "1", name: "Test User" },
  service: { id: "1", name: "Test Service" },
  ...overrides,
});

describe("Booking API", () => {
  describe("GET /api/booking", () => {
    it("should return all bookings with pagination", async () => {
      const bookingsMock = [
        bookingDataMock(),
        bookingDataMock({ id: "2", userId: "2" }),
      ];
      const total = 20;

      prisma.booking.findMany.mockResolvedValue(bookingsMock);
      prisma.booking.count.mockResolvedValue(total);

      const res = await request(app)
        .get("/api/booking")
        .query({ page: 1, limit: 10 });

      expect(res.status).toBe(200);
      expect(res.body.data).toEqual(bookingsMock);
      expect(res.body.page).toBe(1);
      expect(res.body.limit).toBe(10);
      expect(res.body.totalPages).toBe(Math.ceil(total / 10));
      expect(res.body.totalItems).toBe(total);
    });
  });

  describe("GET /api/booking/:id", () => {
    it("should return a booking by ID", async () => {
      const bookingMock = bookingDataMock();
      prisma.booking.findUnique.mockResolvedValue(bookingMock);

      const res = await request(app).get("/api/booking/1");

      expect(res.status).toBe(200);
      expect(res.body).toEqual(bookingMock);
    });

    it("should return 404 if booking not found", async () => {
      prisma.booking.findUnique.mockResolvedValue(null);

      const res = await request(app).get("/api/booking/99");

      expect(res.status).toBe(404);
      expect(res.body.message).toBe(ERRORS.BOOKING_NOT_FOUND);
    });
  });

  describe("POST /api/booking/add", () => {
    let newBookingData;

    beforeEach(() => {
      newBookingData = {
        userId: "1",
        serviceId: "1",
        date: "2023-11-01T00:00:00.000Z",
        notes: "Test note",
        time: "10:00",
      };
      mockUserAndServiceExist();
    });

    it("should create a new booking", async () => {
      const bookingMock = bookingDataMock();
      prisma.booking.create.mockResolvedValue(bookingMock);

      const res = await request(app)
        .post("/api/booking/add")
        .send(newBookingData);

      expect(res.status).toBe(201);
      expect(res.body.data).toEqual(bookingMock);
    });

    it("should return 400 if required fields are missing", async () => {
      const res = await request(app).post("/api/booking/add").send({});

      expect(res.status).toBe(400);
      expect(res.body.message).toBe(ERRORS.USER_REQUIRED);
    });

    it("should return 400 if user or service does not exist", async () => {
      prisma.user.findUnique.mockResolvedValue(null); // Simulate user not found

      const res = await request(app)
        .post("/api/booking/add")
        .send(newBookingData);

      expect(res.status).toBe(400);
      expect(res.body.message).toBe(ERRORS.USER_NOT_FOUND);
    });
  });

  describe("PUT /api/booking/edit/:id", () => {
    it("should update an existing booking", async () => {
      const updatedBookingData = {
        userId: "1",
        serviceId: "1",
        date: "2023-11-02T00:00:00.000Z",
        notes: "Updated note",
        time: "11:00",
      };
      const bookingMock = bookingDataMock(updatedBookingData);

      prisma.booking.findUnique.mockResolvedValue({ id: "1" }); // Booking exists
      mockUserAndServiceExist();
      prisma.booking.update.mockResolvedValue(bookingMock);

      const res = await request(app)
        .put("/api/booking/edit/1")
        .send(updatedBookingData);

      expect(res.status).toBe(200);
      expect(res.body).toEqual(bookingMock);
    });

    it("should return 404 if booking not found", async () => {
      prisma.booking.findUnique.mockResolvedValue(null);

      const res = await request(app)
        .put("/api/booking/edit/99")
        .send({ date: "2023-11-02T00:00:00.000Z" });

      expect(res.status).toBe(404);
      expect(res.body.message).toBe(ERRORS.BOOKING_NOT_FOUND);
    });
  });

  describe("DELETE /api/booking/remove/:id", () => {
    it("should delete a booking", async () => {
      prisma.booking.findUnique.mockResolvedValue({ id: "1" });
      prisma.booking.delete.mockResolvedValue({});

      const res = await request(app).delete("/api/booking/remove/1");

      expect(res.status).toBe(204);
    });

    it("should return 404 if booking not found", async () => {
      prisma.booking.findUnique.mockResolvedValue(null);

      const res = await request(app).delete("/api/booking/remove/99");

      expect(res.status).toBe(404);
      expect(res.body.message).toBe(ERRORS.BOOKING_NOT_FOUND);
    });
  });
});
