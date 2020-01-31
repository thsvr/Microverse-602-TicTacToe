/*

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
const PlayerFactory = (name, symbol) => {
    let score = 0;
    const getScore = () => score;
    const getName = () => name;
    const getSymbol = () => symbol;

    const setScore = () => score += 1;
    const sayHello = () => console.log(`Hello, my name is ${name}`)

    return {getName, getSymbol, getScore, setScore, sayHello}
}

// gameBoard module
const gameBoardModule = (() => {
    const board = [null, null, null, null, null, null, null, null, null]
    const getBoard = () => board;
    const makeMove = (index, symbol) => {
        const board = gameBoard.getBoard()
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
        getBoard,
        makeMove,
        checkWin,
        checkTie,
    }
})();

const gameModule = (() => {
    const turn = 0;
    const currentPlayer = 0;
    const players = [];
    const board = gameBoardModule;
    const continueGame = true;

    const getTurn = () => turn;
    const incrementTurn = () => turn += 1;
    const getCurrentPlayer = () => currentPlayer;
    const setCurrentPlayer = () => {
        if (turn % 2 === 0) {
            currentPlayer = 0
        } else {
            currentPlayer = 1
        }
    };
    const getPlayers = () => players;
    const setPlayers = (player1, player2) => {
        players.push(player1, player2);
    };
    const getBoard = () => board;
    const advanceGame = () => {
        if (!continueGame) { return false }

        if (!board.checkWin() && !board.checkTie()) {
            incrementTurn();
            setCurrentPlayer();
        } else {
            // set winner and loses and player score
            continueGame = false;
            // get last player to play current turn
            const playerIndex = turn % 2;
            players[playerIndex].setScore;
        } 
    }

    return {}
})()
