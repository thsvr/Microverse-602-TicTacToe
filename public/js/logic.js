const PlayerFactory = (name, element) => {
    let score = 0;
    const symbol = element;
    const getScore = () => score;
    const getName = () => name;
    const getSymbol = () => symbol;

    const setScore = () => score += 1;
    const sayHello = () => console.log(`Hello, my name is ${name}`)

    return {
        getName,
        getSymbol,
        getScore,
        setScore,
        sayHello
    }
}

// gameBoard module
const gameBoardModule = (() => {
    let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const getBoard = () => board;
    const resetBoard = () => board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const makeMove = (index, symbol) => {
        if (board[index] !== 0) {
            console.log('You can only play in empty cells, please chose an empty one')
        } else {
            const board = gameBoardModule.getBoard()
            board[index]= symbol;
        }

        return board;
    };
    const checkWin = (symbol) => {
        const boardString = board.join('');
        const colRegexp = new RegExp(`${symbol}..${symbol}..${symbol}`);
        const dia1Regexp = new RegExp(`${symbol}...${symbol}...${symbol}`);
        const dia2Regexp = new RegExp(`..${symbol}.${symbol}.${symbol}..`);
        const rowRegexp = [new RegExp(`${symbol}${symbol}${symbol}......`),
                           new RegExp(`...${symbol}${symbol}${symbol}...`),
                           new RegExp(`......${symbol}${symbol}${symbol}`)];
        if (boardString.match(colRegexp)) {
            console.log(`Column win with ${symbol}!`);
            return true;
        } else if (boardString.match(dia1Regexp) || boardString.match(dia2Regexp)) {
            console.log(`Diagonal win with ${symbol}!`);
            return true;
        } else if (
            boardString.match(rowRegexp[0]) || boardString.match(rowRegexp[1]) || boardString.match(rowRegexp[2])) {
            console.log(`Row win with ${symbol}!`);
            return true;
        }
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
        resetBoard,
    }
})();

const gameModule = (() => {
    let turn = -1;
    let currentPlayer = 0;
    let players = [];
    const board = gameBoardModule;
    let continueGame = true;

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
            const symbol = players[currentPlayer].getSymbol()
            const winner = board.checkWin(symbol)
        if (!winner && !board.checkTie()) {
            incrementTurn();
            setCurrentPlayer();
            console.log(`It's ${players[currentPlayer].getName()}'s turn to play!`);
            return false;
        } else {
            // set winner and loses and player score
            continueGame = false;
            if(winner) { 
            // get last player to play current turn
                const playerIndex = turn % 2;
                players[playerIndex].setScore();
                console.log(`${players[playerIndex].getName()} won!`);
                return 'WIN';
            } else {
                console.log('This game is a tie!');
            }
        } 
    }
    const startGame = (player1, player2) => {
        if (turn === -1) {
            console.log(`
- --------====+* GAME STARTED *+====---------- -
        `)
            setPlayers(PlayerFactory(player1, 'o'), PlayerFactory(player2, 'x'));
            advanceGame(); 
        }
    };

    const makeMove = (index) => {
        if(turn > -1 && continueGame){
            console.log(board.makeMove(index, players[currentPlayer].getSymbol()))
            let symbol = players[currentPlayer].getSymbol()
            let result = advanceGame(); 
            return [symbol, result];
        } else if (continueGame) {
            console.log('The game did not start yet!')
        } else {
            console.log('The game is already over and no replay feature was implemented yet :-(')
        }
        return false;
    }

    const playAgain = () => {
        if(continueGame) {
            return 
        }
        turn = -1;
        currentPlayer = 0;
        board.resetBoard();
        continueGame = true;
        console.log(`
Player score:
        ${players[0].getName()}: ${players[0].getScore()}
        ${players[1].getName()}: ${players[1].getScore()}
        `)
        console.log(`
- --------====+* GAME (RE)STARTED *+====---------- -
        `)
        advanceGame(); 
        return 'CLEAN BOARD'
    }

    const resetGame = () => {
        players = [];
        turn = -1;
        currentPlayer = 0;
        board.resetBoard();
        continueGame = true;
        return 'CLEAN BOARD'
    }

    return {
        getTurn, 
        incrementTurn, 
        getCurrentPlayer, 
        setCurrentPlayer,
        getPlayers, 
        setPlayers, 
        getBoard, 
        advanceGame, 
        startGame, 
        resetGame, 
        playAgain,
        makeMove,
    }
})()

