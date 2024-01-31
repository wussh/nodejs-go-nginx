require('dotenv').config();

const http = require('http');
const port = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
    if (req.url === '/hello') {
        handleHelloRequest(res);
    } else {
        handleDefaultRequest(res);
    }
});

function handleHelloRequest(res) {
    const responseData = { message: 'Hello, world!' };
    sendJsonResponse(res, 200, responseData);
}

function handleDefaultRequest(res) {
    const responseData = { message: 'OK' };
    sendJsonResponse(res, 200, responseData);
}

function sendJsonResponse(res, statusCode, data) {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
}

server.listen(port, () => {
    console.log(`This app is running on ${port}`);
});
