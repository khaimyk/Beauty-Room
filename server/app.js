const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const errorHandler = require("../server/middleware/errorHandler");

const app = express();
app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/image", express.static("image"));

app.use("/api/user", require("../server/routes/users"));
app.use("/api/service", require("../server/routes/services"));
app.use("/api/category", require("../server/routes/categories"));
app.use("/api/client", require("../server/routes/clients"));
app.use("/api/booking", require("../server/routes/bookings"));
app.use("/api/branch", require("../server/routes/branches"));
app.use("/api/review", require("../server/routes/reviews"));
app.use(
  "/api/masterAvailability",
  require("../server/routes/masterAvailability")
);
app.get("/", (req, res) => {
  res.status(200).json({ message: "API працює! 🚀" });
});
app.use(errorHandler);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Щось пішло не так!",
    error: req.app.get("env") === "development" ? err : {},
  });
});

module.exports = app;
