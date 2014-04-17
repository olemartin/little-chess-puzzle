var express = require('express');
var cons = require('consolidate');
var app = express();
var lichess = require('./lib/lichess.js')
var chessboard = require('./lib/chessboard.js')
app.engine('html', cons.handlebars);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/edition', function(req, res) {	
	lichess.fetch(function(response) {
		res.render('index', {
			board: chessboard.generateBoard(response.position),
            solution : response.solution
		});
	});
});

var server = app.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});
