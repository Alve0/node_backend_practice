import http, { IncomingMessage, Server, ServerResponse } from "http";
import path from "path";

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log("server is rnunning....");
    if (req.url == "/" && req.method == "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "success",
          status: 200,
          path: req.url,
        })
      );
    }
  }
);
