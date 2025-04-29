const path = require("path");

class WebFile {
  filename = "";
  static mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".json": "application/json",
    ".png": "image/png",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".mp3": "audio/mpeg",
    ".mp4": "video/mp4",
  };
  constructor(filename) {
    this.filename = filename;
  }
  getExtension() {
    return path.extname(this.filename);
  }
  getMimeType() {
    const fileExtension = this.getExtension();
    return WebFile.mimeTypes[fileExtension] || "text/plain";
  }
}

module.exports = WebFile;
