const http = require('http');
const url = require('url');

const hotsname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    const pathUrl = url.parse(req.url, true)
    console.log('pathUrl', pathUrl.query.nombre)

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html;charset=utf-8')
    res.write(`${pathUrl.query.text} ${pathUrl.query.nombre}`)
    res.end();
})

server.listen(port, hotsname, ()=> {
    console.log(`Server running at http://${hotsname}:${port}`);
})