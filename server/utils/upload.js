const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

// Set storage engine
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../image"),
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${crypto
      .randomBytes(6)
      .toString("hex")}`;
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = fileTypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error("Images only!"));
    }
  },
});

module.exports = upload;
