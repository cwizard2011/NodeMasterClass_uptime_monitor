const http = require('http');
const url = requir('url');

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);

    res.end('Hello World \n');
});

server.listen(3000, () => {
    console.log("The server is listening on port 3000")
})