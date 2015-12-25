var http = require('http');
var qs = require('querystring');
var fs = require('fs');


const hostname = '127.0.0.1';
const port = 1337;


http.createServer(function (req, res) {

    if (req.method == 'POST') {
        var body = '';

        req.on('data', function (data) {
            body += data;
        });

        req.on('end', function () {

            var post = qs.parse(body);
            var writeToFile = post.vorname + ' ' + post.name + ', ' + post.jahr + ', ' + post.hcoach + ', ' +
                post.acoach + ', ' + post.position + ", " + post.number + '\n';


            fs.appendFile('form.txt', writeToFile, function (err) {
                if (err) throw err;
            });


            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end("POST was successful");
        });

    } else {
        res.writeHead(405, {'Content-Type': 'text/plain'});
        res.end("Method Not Allowed");
    }


}).listen(port, hostname);
