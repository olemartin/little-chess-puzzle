var assert = require("assert")
var chessboard = require("../lib/chessboard.js")
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

describe('Chessboard', function() {
	describe('generateBoard', function() {
		it('should have 8 characters on first line', function() {
			var arr = chessboard.generateBoard("r2qk1nr/ppp2ppp/2p5/2b1p3/4PP2/5b1P/PPPP2P1/RNBQK2R");
			assert.equal(8, arr.board[0].length);
		});
		
		it('should have first line correct', function() {
			var arr = chessboard.generateBoard("r2qk1nr/ppp2ppp/2p5/2b1p3/4PP2/5b1P/PPPP2P1/RNBQK2R");
			assert.deepEqual(['♜', ' ', ' ', '♛', '♚',' ', '♞', '♜'], arr.board[0]);
		});
		
		it('should have second line correct', function() {
			var arr = chessboard.generateBoard("r2qk1nr/ppp2ppp/2p5/2b1p3/4PP2/5b1P/PPPP2P1/RNBQK2R");
			assert.deepEqual(['♟','♟','♟', ' ', ' ','♟','♟','♟'], arr.board[1]);
		});
		
		it('should have eight lines', function() {
			var arr = chessboard.generateBoard("r2qk1nr/ppp2ppp/2p5/2b1p3/4PP2/5b1P/PPPP2P1/RNBQK2R");
			assert.equal(8, arr.board.length);
		});
	})
})
