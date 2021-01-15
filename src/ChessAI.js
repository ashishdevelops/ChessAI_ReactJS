var reverseArray = function(array) {
    return array.slice().reverse();
};

var pawnEvalWhite =
    [
        [0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0],
        [5.0,  5.0,  5.0,  5.0,  5.0,  5.0,  5.0,  5.0],
        [1.0,  1.0,  2.0,  3.0,  3.0,  2.0,  1.0,  1.0],
        [0.5,  0.5,  1.0,  2.5,  2.5,  1.0,  0.5,  0.5],
        [0.0,  0.0,  0.0,  2.0,  2.0,  0.0,  0.0,  0.0],
        [0.5, -0.5, -1.0,  0.0,  0.0, -1.0, -0.5,  0.5],
        [0.5,  1.0, 1.0,  -2.0, -2.0,  1.0,  1.0,  0.5],
        [0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0]
    ];

var pawnEvalBlack = reverseArray(pawnEvalWhite);

var knightEval =
    [
        [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0],
        [-4.0, -2.0,  0.0,  0.0,  0.0,  0.0, -2.0, -4.0],
        [-3.0,  0.0,  1.0,  1.5,  1.5,  1.0,  0.0, -3.0],
        [-3.0,  0.5,  1.5,  2.0,  2.0,  1.5,  0.5, -3.0],
        [-3.0,  0.0,  1.5,  2.0,  2.0,  1.5,  0.0, -3.0],
        [-3.0,  0.5,  1.0,  1.5,  1.5,  1.0,  0.5, -3.0],
        [-4.0, -2.0,  0.0,  0.5,  0.5,  0.0, -2.0, -4.0],
        [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0]
    ];

var bishopEvalWhite = [
    [ -2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
    [ -1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -1.0],
    [ -1.0,  0.0,  0.5,  1.0,  1.0,  0.5,  0.0, -1.0],
    [ -1.0,  0.5,  0.5,  1.0,  1.0,  0.5,  0.5, -1.0],
    [ -1.0,  0.0,  1.0,  1.0,  1.0,  1.0,  0.0, -1.0],
    [ -1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0, -1.0],
    [ -1.0,  0.5,  0.0,  0.0,  0.0,  0.0,  0.5, -1.0],
    [ -2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0]
];

var bishopEvalBlack = reverseArray(bishopEvalWhite);

var rookEvalWhite = [
    [  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0],
    [  0.5,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [  0.0,   0.0, 0.0,  0.5,  0.5,  0.0,  0.0,  0.0]
];

var rookEvalBlack = reverseArray(rookEvalWhite);

var evalQueen =
    [
    [ -2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0],
    [ -1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -1.0],
    [ -1.0,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -1.0],
    [ -0.5,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -0.5],
    [  0.0,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -0.5],
    [ -1.0,  0.5,  0.5,  0.5,  0.5,  0.5,  0.0, -1.0],
    [ -1.0,  0.0,  0.5,  0.0,  0.0,  0.0,  0.0, -1.0],
    [ -2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0]
];

var kingEvalWhite = [

    [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [ -2.0, -3.0, -3.0, -4.0, -4.0, -3.0, -3.0, -2.0],
    [ -1.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -1.0],
    [  2.0,  2.0,  0.0,  0.0,  0.0,  0.0,  2.0,  2.0 ],
    [  2.0,  3.0,  1.0,  0.0,  0.0,  1.0,  3.0,  2.0 ]
];

var kingEvalBlack = reverseArray(kingEvalWhite);


class ChessAI {
    constructor(chess_game){
        this.game = chess_game;
        //this.board = chess_game.board();
    }

    move(depth, maximizingPlayer){
        console.log('thinking')
        let moves_list = this.game.moves({ verbose: true });
        let best_move_value = -9999;
        let best_move;

        for(let i = 0; i < moves_list.length; i++) {
            let some_move = moves_list[i];
            this.game.move(some_move);
            var value = this.minimax(depth, -10000, 10000, maximizingPlayer);
            //var value = this.pvs(depth, Number.MIN_VALUE, Number.MAX_VALUE, -1);
            this.game.undo();
            if(value >= best_move_value){
                best_move_value = value;
                best_move = some_move;
            }
        }
        console.log("AI MOVE",best_move, best_move_value)

        return {
            piece: best_move['piece'],
            from: best_move['from'].toUpperCase(),
            to: best_move['to'].toUpperCase()
        }
    }

    calculate_value(board){
        let value = 0;
        for(let i = 0; i < 8; ++i){
            for(let j = 0; j < 8; ++j){
                value = value + this.pieceValue(board[i][j],i,j);
            }
        }
        return value;
    }

    pieceValue(piece, i, j){
        let values = new Map([['k', 900],['q', 90],['r', 50],['b', 30],['n', 30],['p',10]])
        let positions_black = new Map([['k', kingEvalBlack[i][j]],['q', evalQueen[i][j]],['r', rookEvalBlack[i][j]],['b', bishopEvalBlack[i][j]],['n', knightEval[i][j]],['p',pawnEvalBlack[i][j]]])
        let positions_white = new Map([['k', kingEvalWhite[i][j]],['q', evalQueen[i][j]],['r', rookEvalWhite[i][j]],['b', bishopEvalWhite[i][j]],['n', knightEval[i][j]],['p',pawnEvalWhite[i][j]]])
        if(piece){
            if(piece.color === 'b'){
                return -1*(values.get(piece.type)+positions_black.get(piece.type));
            }else{
                return values.get(piece.type)+positions_white.get(piece.type);
            }
        }
        return 0;
        // if (piece === null) {
        //     return 0;
        // }
        // var getAbsoluteValue = function (piece, isWhite, x ,y) {
        //     if (piece.type === 'p') {
        //         return 10 + ( isWhite ? pawnEvalWhite[y][x] : pawnEvalBlack[y][x] );
        //     } else if (piece.type === 'r') {
        //         return 50 + ( isWhite ? rookEvalWhite[y][x] : rookEvalBlack[y][x] );
        //     } else if (piece.type === 'n') {
        //         return 30 + knightEval[y][x];
        //     } else if (piece.type === 'b') {
        //         return 30 + ( isWhite ? bishopEvalWhite[y][x] : bishopEvalBlack[y][x] );
        //     } else if (piece.type === 'q') {
        //         return 90 + evalQueen[y][x];
        //     } else if (piece.type === 'k') {
        //         return 900 + ( isWhite ? kingEvalWhite[y][x] : kingEvalBlack[y][x] );
        //     }
        //     throw "Unknown piece type: " + piece.type;
        // };
    
        // var absoluteValue = getAbsoluteValue(piece, piece.color === 'w', x ,y);
        // return piece.color === 'w' ? absoluteValue : -absoluteValue;
    }

    minimax(depth, alpha, beta, maximisingPlayer){

        if (depth === 0) {
            return -this.calculate_value(this.game.board());
        }

        var newGameMoves = this.game.moves({verbose : true});

        if (maximisingPlayer) {
            var bestMove = Number.MIN_VALUE;
            for (let i = 0; i < newGameMoves.length; i++) {
                this.game.move(newGameMoves[i]);
                bestMove = Math.max(bestMove, this.minimax(depth - 1, alpha, beta, !maximisingPlayer));
                this.game.undo();
                alpha = Math.max(alpha, bestMove);
                if (beta <= alpha) {
                    return bestMove;
                }
            }
            return bestMove;
        } else {
            var bestMove = Number.MAX_VALUE;
            for (let i = 0; i < newGameMoves.length; i++) {
                this.game.move(newGameMoves[i]);
                bestMove = Math.min(bestMove, this.minimax(depth - 1, alpha, beta, !maximisingPlayer));
                this.game.undo();
                beta = Math.min(beta, bestMove);
                if (beta <= alpha) {
                    return bestMove;
                }
            }
            return bestMove;
        }
    }

    pvs(depth, alpha, beta, color){
        if(depth === 0){
            return color * this.calculate_value(this.game.board())
        }

        let moves_list = this.game.moves({verbose:true})

        for(let i = 0; i < moves_list.length; ++i){
            this.game.move(moves_list[i]);
            if(i === 0){
                var score = -this.pvs(depth-1,-beta,-alpha,-color);
            }else{
                var score = -this.pvs(depth-1,-alpha-1,-alpha,-color);
                if(alpha < score && score < beta){
                    score = -this.pvs(depth-1, -beta, -score, -color);
                }
            }
            this.game.undo()
            alpha = Math.max(alpha, score)
            if(alpha >= beta){
                break
            }
        }
        return alpha
    }
}

export default ChessAI