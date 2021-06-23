const moduls = require('./moduls');

const http = require('http');
const url = require('url');

const hotsname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    const pathUrl = url.parse(req.url, true)

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html;charset=utf-8')
    res.write(`El resultado es: ${moduls.operation(pathUrl.query.num1, pathUrl.query.num2)}`)
    res.end();
})

server.listen(port, hotsname, ()=> {
    console.log(`Server running at http://${hotsname}:${port}`);
})