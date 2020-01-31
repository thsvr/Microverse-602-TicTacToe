/*
const gameBoard = { board:[ null, x, o,
                           o, X, null,
                          null, x, null], makeMove: function() { 
                              // this function going to change the value of a board cell
                            }  };

const game = {checkWin: function() {
    //all the possibilities of some player win the game
    //if it finds a winner, the continueGame will be false

}, checkTie: function() {
    // the possibilitie of tie 
    //if it finds a tie, the continueGame will be false

}, turnCounter: 0,

playerTurn: function() {
    //checks the turn of the player
},

bothPlayers: [{},{}],
// each object represents a player

board: {},
// just a board to players play


advanceGame: function() {
    // if continueGame = true, advanceGame will run, else -false- the advance Game will stop
    // it will call the function that check if there is a winner, a tie or a possible empty field to be marked.
},

startGame: function(player1, player2, gameBoard){
    //advanceGame()
},

continueGame: true,

}
const player = {name:"name", symbol:"0", score:0};
*/
// Player factory
const Player = (name, symbol) => {
    let score = 0;
    const getScore = () => score;
    const getName = () => name;
    const getSymbol = () => symbol;

    const setScore = () => score += 1;
    const sayHello = () => console.log(`Hello, my name is ${name}`)

    return {getName, getSymbol, getScore, setScore, sayHello}
}

// gameBoard module
const gameBoard = (() => {
    const board = () => [null, null, null, null, null, null, null, null, null];
    const makeMove = (board, index, symbol) => {
        board[index]= symbol;
        return board;
    };
    const checkWin = (board) => {
        return false;
    };
    const checkTie = (board) => {
        return false;
    };

    return {
        board,
        makeMove,
        checkWin,
        checkTie,
    }

})();