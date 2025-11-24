import http, { IncomingMessage, Server, ServerResponse } from "http";
import { config } from "./config";

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log("server is rnunning....");
    if (req.url == "/" && req.method == "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Surver Running.......",
          status: 200,
        })
      );
    }
    if (req.url == "/api" && req.method == "GET") {
    }
  }
);

server.listen(config.port, () => {
  console.log("server is running.....");
});
