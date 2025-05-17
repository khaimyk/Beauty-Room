const paginateResponse = (data, page, limit, total) => {
  const parsedPage = Number(page) || 1;
  const parsedLimit = Number(limit) || 10;
  return {
    data,
    page: Number(parsedPage),
    limit: Number(parsedLimit),
    totalPages: Math.ceil(total / parsedLimit),
    totalItems: total,
  };
};

module.exports = paginateResponse;
