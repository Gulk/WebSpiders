var http = require('http');
var qs = require('querystring');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Fix for XMLHttpRequest
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT");

    next();
});

/**
 * REST - get all players
 */
app.get('/AllPlayers', function (req, res) {
    fs.readFile("player.json", 'utf8', function (err, data) {
        if (err) throw err;

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

        res.end(JSON.stringify(resultJSON));
    });
});


/**
 * REST - add Player
 */
app.put('/Player', function (req, res) {

    console.log("PUT");

    console.log(req.body);

    var writeToFile = req.body.vorname + ' ' + req.body.name + ', ' + req.body.jahr + ', ' + req.body.hcoach + ', ' +
        req.body.acoach + ', ' + req.body.position + ", " + req.body.number + '\n';


    fs.appendFile('form.txt', writeToFile, function (err) {
        if (err) throw err;
    });

    res.end("Player added");
});
