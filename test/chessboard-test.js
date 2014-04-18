var assert = require("assert")
var chessboard = require("../lib/chessboard.js")

describe('Chessboard', function() {
	describe('generateBoard', function() {
		it('should have 8 characters on first line', function() {
			var arr = chessboard.generateBoard("r2qk1nr/ppp2ppp/2p5/2b1p3/4PP2/5b1P/PPPP2P1/RNBQK2R");
			assert.equal(8, arr.board[0].length);
		});
		
		it('should have first line correct', function() {
			var arr = chessboard.generateBoard("r2qk1nr/ppp2ppp/2p5/2b1p3/4PP2/5b1P/PPPP2P1/RNBQK2R");

			assert.deepEqual([{piece:'bR',color:'w'}, {piece:'blank',color:'b'},{piece:'blank',color:'w'},{piece:'bQ',color:'b'},
                {piece:'bK',color:'w'},{piece:'blank',color:'b'},{piece:'bK',color:'w'},{piece:'bR',color:'b'}], arr.board[0]);
		});
		
		it('should have second line correct', function() {
			var arr = chessboard.generateBoard("r2qk1nr/ppp2ppp/2p5/2b1p3/4PP2/5b1P/PPPP2P1/RNBQK2R");
			assert.deepEqual([{piece:'bP',color:'b'},{piece:'bP',color:'w'},{piece:'bP',color:'b'},{piece:'blank',color:'w'},
                {piece:'blank',color:'b'},{piece:'bP',color:'w'},{piece:'bP',color:'b'},{piece:'bP',color:'w'}], arr.board[1]);
		});
		
		it('should have eight lines', function() {
			var arr = chessboard.generateBoard("r2qk1nr/ppp2ppp/2p5/2b1p3/4PP2/5b1P/PPPP2P1/RNBQK2R");
			assert.equal(8, arr.board.length);
		});
	})
})
