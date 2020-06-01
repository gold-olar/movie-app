const { createServer } = require("http");
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const compression = require("compression");
const normalizePort = (port) => parseInt(port, 10);

const PORT = normalizePort(process.env.PORT || 5000);

const app = express();

const dev = app.get("env") !== "production";

if (!dev) {
  app.disable("x-powered-by");
  app.use(compression());
  app.use(morgan("common"));

  /**
   * Serve the build folder on every request.
   */
  app.use(express.static(path.resolve(__dirname, "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

if (dev) {
  app.use(morgan("dev"));
}

const server = createServer(app);

server.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server Started !!!`);
});
