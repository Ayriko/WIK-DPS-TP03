"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const os_1 = require("os");
const port = process.env.PING_LISTEN_PORT ? process.env.PING_LISTEN_PORT : 3000;
http_1.default.createServer(function (req, res) {
    if (req.method === 'GET' && req.url === '/ping') {
        console.log("Hôte : " + os_1.hostname);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(req.headers));
    }
    else {
        res.writeHead(404, { "Content-Type": 'application/json' });
    }
    res.end();
}).listen(port, function () {
    console.log(`server start at port: ${port}`);
});
