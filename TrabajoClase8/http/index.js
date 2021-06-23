const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html;charset=utf-8' })
    res.write('Hello word')
    res.end()
});

server.listen(5000)

console.log('Node.js Listening on port 5000')