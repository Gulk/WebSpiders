var http = require('http');
var qs = require('querystring');
var fs = require('fs');
var express = require('express');
var app = express();

/**
 * REST - get all players
 */
app.get('/AllPlayers', function (req, res) {
    fs.readFile("player.json", 'utf8', function (err, data) {
        if (err) throw err;

        res.setHeader('Access-Control-Allow-Origin', '*'); // fix XMLHttpRequest cannot load
        res.end(data);
    });
});

/**
 * REST - get favorite players
 */
app.get('/Favorites', function (req, res) {
    fs.readFile("player.json", 'utf8', function (err, data) {
        if (err) throw err;

        var resultJSON = [];
        var jSonArray = JSON.parse(data);

        for (var i = 0; i < jSonArray.length; i++) {
            if (jSonArray[i].isFavorite) {

                resultJSON.push({
                    "_id"           : jSonArray[i]._id,
                    "isActive"      : jSonArray[i].isActive,
                    "isFavorite"    : jSonArray[i].isFavorite,
                    "year"          : jSonArray[i].year,
                    "number"        : jSonArray[i].number,
                    "firstname"     : jSonArray[i].firstname,
                    "surname"       : jSonArray[i].surname,
                    "headcoach"     : jSonArray[i].headcoach,
                    "asisstantcoach": jSonArray[i].asisstantcoach,
                    "team"          : jSonArray[i].team,
                    "position"      : jSonArray[i].position

                });

            }
        }

        res.setHeader('Access-Control-Allow-Origin', '*'); // fix XMLHttpRequest cannot load
        res.end(JSON.stringify(resultJSON));
    });
});


/**
 * REST - add Player
 */
app.put('/Player', function (req, res) {

    console.log("PUT");

    var writeToFile = req.body.vorname + ' ' + req.body.name + ', ' + req.body.jahr + ', ' + req.body.hcoach + ', ' +
        req.body.acoach + ', ' + req.body.position + ", " + req.body.number + '\n';


    fs.appendFile('form.txt', writeToFile, function (err) {
        if (err) throw err;
    });

    res.setHeader('Access-Control-Allow-Origin', '*'); // fix XMLHttpRequest cannot load
    res.end("Player added");
});


var server = app.listen(1337, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
