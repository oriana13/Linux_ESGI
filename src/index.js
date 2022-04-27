const http = require("http");

const port = 8000;
const host = "0.0.0.0";

const serverHandler = (request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello, Reverse Proxy!");
};

const serverListenHandler = () => {
    console.log(`Listening on http://${host}:${port}`);
};

const server = http.createServer(serverHandler);

server.listen(port, host, serverListenHandler);
