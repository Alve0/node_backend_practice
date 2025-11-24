"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const config_1 = require("./config");
const server = http_1.default.createServer((req, res) => {
    console.log("server is rnunning....");
    if (req.url == "/" && req.method == "GET") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({
            message: "success",
            status: 200,
            path: req.url,
            data: config_1.config.env || 5000,
        }));
    }
});
server.listen(config_1.config.port, () => {
    console.log("server is running.....");
});
