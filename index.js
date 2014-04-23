var express = require('express');
var cons = require('consolidate');
var app = express();
var Handlebars = require('handlebars');
var lichess = require('./lib/lichess.js')
var chessboard = require('./lib/chessboard.js')
app.engine('html', cons.handlebars);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(require('etagify')());

Handlebars.registerHelper("plus", function(number) {
    return number + 1;
});

function coordinates(aimove) {
    var startX = 48 * (aimove.charCodeAt(0) - 96) - 24;
    var startY = 384 - (48 * parseInt(aimove.charAt(1)) - 24);
    var stopX = 48 * (aimove.charCodeAt(2) - 96) - 24;
    var stopY = 384 - (48 * parseInt(aimove.charAt(3)) - 24);
    return [startX, startY, stopX, stopY];
}


var render = function (res, response) {
    res.etagify();
    var solution = response.solution.slice(1).join(", ");
    res.render('index', {
        board: chessboard.generateBoard(response.position),
        solution: response.solution.slice(1),
        aimove: coordinates(response.solution[0]),
        url : response.url,
        color: response.color,
        rating: response.rating,
        moves: response.solution.length / 2
    });
};

app.get('/edition', function (req, res) {
    lichess.fetch(function (response) {
        render(res, response)
    });
});

app.get('/sample', function (req, res) {
    lichess.sample(function (response) {
        render(res, response)
    });
});

app.get('/', function (req, res) {
    res.redirect('/edition');
});

var server = app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on port %d', server.address().port);
});
