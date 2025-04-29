const path = require("path");
const mime = require("mime-types");

class WebFile {
  filename = "";
  constructor(filename) {
    this.filename = filename;
  }
  getExtension() {
    return path.extname(this.filename);
  }
  getMimeType() {
    const fileExtension = this.getExtension();
    return mime.lookup(fileExtension) || "text/plain";  
  }
}

module.exports = WebFile;
