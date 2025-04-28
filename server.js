const http = require("http");
const fs = require("fs");
const path = require("path");

const WebFile = require("./functions/webfile");

/**
 *
 * @param {http.ClientRequest} req
 * @param {http.ServerResponse} res
 */
function app(req, res) {
  if (req.method === "GET" && !req.url.startsWith("/api")) {
    const sanitizedUrl = path.normalize(req.url).replace(/^(\.\.[\/\\])+/, "");
    const fileReq = new WebFile(sanitizedUrl);
    let filePath = path.join(__dirname, "views", fileReq.filename);

    const ext = path.extname(filePath).toLowerCase();
    let contentType = "text/html"; // Default to HTML

    // Set content type based on file extension
    if (ext === ".js") {
      contentType = "text/javascript";
    } else if (ext === ".css") {
      contentType = "text/css";
    } else if (ext === ".json") {
      contentType = "application/json";
    } else if (ext === ".png") {
      contentType = "image/png";
    } else if (ext === ".jpg" || ext === ".jpeg") {
      contentType = "image/jpeg";
    } else if (ext === ".gif") {
      contentType = "image/gif";
    } else if (ext === ".html") {
      contentType = "text/html";
    }

    try {
      // Check if the file exists
      if (!fs.existsSync(filePath)) {
        // If the file does not exist, serve the 404 page
        filePath = path.join(__dirname, "views/404.html");
        contentType = "text/html";
      } else if (fs.statSync(filePath).isDirectory()) {
        // If the filePath is a directory, serve an index.html file if it exists
        const indexPath = path.join(filePath, "index.html");
        if (fs.existsSync(indexPath)) {
          filePath = indexPath;
          contentType = "text/html";
        } else {
          // If no index.html exists, serve the 404 page
          filePath = path.join(__dirname, "views/404.html");
          contentType = "text/html";
        }
      }

      // Serve the file
      res.writeHead(200, { "Content-Type": contentType });
      res.write(fs.readFileSync(filePath));
      console.log(`Requested URL: ${req.url}`);
      console.log(`Resolved file path: ${filePath}`);
      console.log(`Content-Type: ${contentType}`);
    } catch (err) {
      // Handle errors gracefully
      console.error("Error serving file:", err);
      res.writeHead(500, { "Content-Type": "text/html" });
      res.write("<h1>500 - Internal Server Error</h1>");
    }
  } else {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        msg: "Success",
        path: req.url,
        method: req.method,
      })
    );
  }

  res.end();
}

const server = http.createServer(app);

const port = process.env.PORT || 5445;

server.listen(port);
console.log(`Hosted at: http://localhost:${port}`);