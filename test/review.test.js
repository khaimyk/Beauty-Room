const request = require("supertest");
const app = require("../app"); // Replace with the actual path to your app
const { prisma } = require("../prisma/prisma-client");
const { ERRORS } = require("../utils/constants");

jest.mock("../prisma/prisma-client", () => ({
  prisma: {
    review: {
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
    client: {
      findUnique: jest.fn(),
    },
  },
}));

const reviewMock = {
  id: "1",
  rating: 5,
  comment: "Great service",
  serviceId: "1",
  userId: "1",
  clientId: "1",
  service: { id: "1", name: "Service Name" },
  user: { id: "1", name: "User Name" },
  client: { id: "1", name: "Client Name" },
};

const reviewsMock = [reviewMock, { ...reviewMock, id: "2", rating: 4 }];

afterEach(() => {
  jest.clearAllMocks();
});

describe("GET /api/review", () => {
  it("should return all reviews with pagination", async () => {
    const total = 20;

    prisma.review.findMany.mockResolvedValue(reviewsMock);
    prisma.review.count.mockResolvedValue(total);

    const res = await request(app)
      .get("/api/review")
      .query({ page: 1, limit: 10 });

    expect(res.status).toBe(200);
    expect(res.body.data).toEqual(reviewsMock);
    expect(res.body.page).toBe(1);
    expect(res.body.limit).toBe(10);
    expect(res.body.totalPages).toBe(Math.ceil(total / 10));
    expect(res.body.totalItems).toBe(total);
  });
});

describe("GET /api/review/:id", () => {
  it("should return a single review by ID", async () => {
    prisma.review.findUnique.mockResolvedValue(reviewMock);

    const res = await request(app).get("/api/review/1");

    expect(res.status).toBe(200);
    expect(res.body).toEqual(reviewMock);
  });

  it("should return 404 if the review is not found", async () => {
    prisma.review.findUnique.mockResolvedValue(null);

    const res = await request(app).get("/api/review/99");

    expect(res.status).toBe(404);
    expect(res.body.message).toBe(ERRORS.REVIEW_NOT_FOUND);
  });
});

describe("POST /api/review/add", () => {
  const reviewData = {
    rating: 5,
    comment: "Excellent service",
    serviceId: "1",
    userId: "1",
    clientId: "1",
  };
  beforeEach(() => {
    prisma.user.findUnique.mockResolvedValue({ id: "1" });
    prisma.client.findUnique.mockResolvedValue({ id: "1" });
    prisma.service.findUnique.mockResolvedValue({ id: "1" });
  });

  it("should create a new review", async () => {
    prisma.review.create.mockResolvedValue(reviewMock);

    const res = await request(app).post("/api/review/add").send(reviewData);

    expect(res.status).toBe(201);
    expect(res.body).toEqual(reviewMock);
  });

  it("should return 400 if validation fails", async () => {
    const invalidData = { rating: 6, serviceId: "1" };

    const res = await request(app).post("/api/review/add").send(invalidData);

    expect(res.status).toBe(400);
    expect(res.body.message).toBe(ERRORS.RATING_MAX);
  });
});

describe("PUT /api/review/edit/:id", () => {
  const updatedData = {
    rating: 4,
    comment: "Updated comment",
    serviceId: "1",
  };

  beforeEach(() => {
    prisma.review.findUnique.mockResolvedValue({ id: "1" });
    prisma.user.findUnique.mockResolvedValue({ id: "1" });
    prisma.client.findUnique.mockResolvedValue({ id: "1" });
    prisma.service.findUnique.mockResolvedValue({ id: "1" });
  });
  it("should update an existing review", async () => {
    prisma.review.update.mockResolvedValue({
      ...reviewMock,
      ...updatedData,
    });

    const res = await request(app).put("/api/review/edit/1").send(updatedData);

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ ...reviewMock, ...updatedData });
  });

  it("should return 404 if the review is not found", async () => {
    prisma.review.findUnique.mockResolvedValue(null); // Simulate review not found

    const res = await request(app).put("/api/review/edit/99").send(updatedData);

    expect(res.status).toBe(404);
    expect(res.body.message).toBe(ERRORS.REVIEW_NOT_FOUND);
  });
});

describe("DELETE /api/review/remove/:id", () => {
  beforeEach(() => {
    prisma.review.findUnique.mockResolvedValue(reviewMock);
  });
  it("should delete a review", async () => {
    prisma.review.delete.mockResolvedValue(reviewMock);

    const res = await request(app).delete("/api/review/remove/1");

    expect(res.status).toBe(204);
  });

  it("should return 404 if the review is not found", async () => {
    prisma.review.findUnique.mockResolvedValue(null);

    const res = await request(app).delete("/api/review/remove/99");

    expect(res.status).toBe(404);
    expect(res.body.message).toBe(ERRORS.REVIEW_NOT_FOUND);
  });
});
