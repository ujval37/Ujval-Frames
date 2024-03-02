const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // GET / (Index Route)
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Farcaster Frame Example</title>
          <meta name="fc:frame" content="vNext">
          <meta name="fc:frame:image" content="https://fc-dev-call.replit.app/image">
      </head>
      <body>
          <div id="frameContainer" style="width: 600px; height: 400px;">
              <div>
                  <button onclick="window.location.href = 'https://www.farcaster.xyz/'">Farcaster</button>
                  <button onclick="window.location.href = 'https://www.warpcast.com/'">Warpcast</button>
                  <button onclick="window.location.href = 'https://docs.farcaster.xyz/'">Farcaster Docs</button>
                  <button onclick="window.location.href = 'https://www.thehubble.xyz/'">Farcaster Hubble</button>
              </div>
          </div>
      </body>
      </html>`);
    res.end();
  } else if (req.url === "/image") {
    // GET /image
    const imagePath = path.join(__dirname, "frame-fc.png");
    const imageStream = fs.createReadStream(imagePath);
    res.writeHead(200, { "Content-Type": "image/png" });
    imageStream.pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
