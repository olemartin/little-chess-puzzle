var piecesUnicode = {
	'K': '♔', // U+2654
	'Q': '♕', // U+2655
	'R': '♖', // U+2656
	'B': '♗', // U+2657
	'N': '♘', // U+2658
	'P': '♙', // U+2659

	'k': '♚', //U+265A
	'q': '♛', //U+265B
	'r': '♜', // U+265C
	'b': '♝', // U+265D
	'n': '♞', // U+265E
	'p': '♟'
};

var pieces = {
    'K': 'wK', // U+2654
    'Q': 'wQ', // U+2655
    'R': 'wR', // U+2656
    'B': 'wB', // U+2657
    'N': 'wN', // U+2658
    'P': 'wP', // U+2659

    'k': 'bK', //U+265A
    'q': 'bQ', //U+265B
    'r': 'bR', // U+265C
    'b': 'bB', // U+265D
    'n': 'bN', // U+265E
    'p': 'bP'
};

function generateBoard(fen) {

	var data = fen.split(" ");
	return {
		'board' : generateArray(data[0]),
		'playing' : data[1] === 'w' ? "White" : "Black",
		'castling' : data[2],
		'enpassant' : data[3],
		'halfmove' : data[4],
		'moves' : data[5]
	}

}

function switchColor(color) {
    if (color === 'w') {
        return 'b';
    } else {
        return 'w'
    }
}

function generateArray(positions) {
    var currentcolor='w';
	var array = [];
	var rows = positions.split("/");
	for (var i = 0; i < rows.length; i++) {
        currentcolor = switchColor(currentcolor);
		var arr = []
		var l = 0;
		for (var j = 0; j < rows[i].length; j++) {
			var current = rows[i].charAt(j);
			if (!isNaN(parseInt(current))) {
				for (var k = 0; k < parseInt(current); k++) {
                    currentcolor = switchColor(currentcolor);
					arr[l++] = {piece:'blank',color:currentcolor};
				}
			} else {
                currentcolor = switchColor(currentcolor);
				arr[l++] = {piece: pieces[current], color:currentcolor};
			}
		}
		array[i] = arr;
	}
	return array;
}

module.exports.generateBoard = generateBoard;
