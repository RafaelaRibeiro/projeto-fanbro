import multer from "multer";
import crypto from "crypto";
import path from "path";

// const tmpFolder = resolve(__dirname, "..", "..", "tmp");
const tmpFolder = (req, file, cb) => {
  cb(null, path.resolve(__dirname, "..", "..", "tmp"));
};

const storageTypes = {
  local: multer.diskStorage({
    destination: tmpFolder,
    filename: (req, file, cb) => {
      const fileHash = crypto.randomBytes(16).toString("hex");
      const fileName = `${fileHash}-${file.originalname}`;
      cb(null, fileName);
    },
  }),
};

export default {
  tmpFolder,
  storage: storageTypes["local"],
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif",
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  },
};
