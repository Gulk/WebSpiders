var http = require('http');

const hostname = '127.0.0.1';
const port = 1337;


http.createServer(function (req, res) {
    console.log('User connected to Server');

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Sie haben sich erfolgreich auf den WebServer mit der Url ' + hostname + ':' + port + ' verbunden');
}).listen(port, hostname);
