const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Serve HTML content
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(path.join(__dirname, "index.html")).pipe(res);
  } else if (req.url === "/image") {
    // Serve image file
    const imagePath = path.join(__dirname, "Lynx_HeadOn_Crop1.jpg");
    const imageStream = fs.createReadStream(imagePath);
    res.writeHead(200, { "Content-Type": "image/jpeg" }); // Specify correct content type for the image
    imageStream.pipe(res);
  } else {
    // Handle 404 Not Found
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
