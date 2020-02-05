const PlayerFactory = (name, element) => {
  let score = 0;
  const symbol = element;
  const getScore = () => score;
  const getName = () => name;
  const getSymbol = () => symbol;

  function setScore() {
    score += 1;
  }

  return {
    getName,
    getSymbol,
    getScore,
    setScore,
  };
};

const gameBoardModule = (() => {
  let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const getBoard = () => board;
  function resetBoard() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
  const makeMove = (index, symbol) => {
    if (board[index] !== 0) {
      return false;
    }
    const thisBoard = gameBoardModule.getBoard();
    thisBoard[index] = symbol;
    return thisBoard;
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
      return true;
    } if (boardString.match(dia1Regexp) || boardString.match(dia2Regexp)) {
      return true;
    } if (
      boardString.match(rowRegexp[0])
      || boardString.match(rowRegexp[1])
      || boardString.match(rowRegexp[2])) {
      return true;
    }
    return false;
  };
  const checkTie = () => !board.some(n => n === 0);

  return {
    getBoard,
    makeMove,
    checkWin,
    checkTie,
    resetBoard,
  };
})();

// eslint-disable-next-line no-unused-vars
const gameModule = (() => {
  let turn = -1;
  let currentPlayer = 0;
  let players = [];
  const board = gameBoardModule;
  let continueGame = true;

  const getTurn = () => turn;
  function incrementTurn() {
    turn += 1;
  }
  const getCurrentPlayer = () => currentPlayer;
  const setCurrentPlayer = () => {
    if (turn % 2 === 0) {
      currentPlayer = 0;
    } else {
      currentPlayer = 1;
    }
  };
  const getPlayers = () => players;
  const setPlayers = (player1, player2) => {
    players.push(player1, player2);
  };
  const getBoard = () => board;
  const advanceGame = () => {
    if (!continueGame) { return false; }
    const symbol = players[currentPlayer].getSymbol();
    const winner = board.checkWin(symbol);
    if (!winner && !board.checkTie()) {
      incrementTurn();
      setCurrentPlayer();
      return false;
    }

    continueGame = false;
    if (winner) {
      const playerIndex = turn % 2;
      players[playerIndex].setScore();
      return ['WIN', playerIndex, players[playerIndex].getScore()];
    }
    return 'TIE';
  };
  const startGame = (player1, player2) => {
    if (turn === -1) {
      setPlayers(PlayerFactory(player1, 'o'), PlayerFactory(player2, 'x'));
      advanceGame();
    }
  };

  const makeMove = (index) => {
    if (turn > -1 && continueGame) {
      const move = board.makeMove(index, players[currentPlayer].getSymbol());
      if (!move) {
        return false;
      }
      const symbol = players[currentPlayer].getSymbol();
      const result = advanceGame();
      return [symbol, result];
    }
    return false;
  };

  const playAgain = () => {
    if (continueGame) {
      return null;
    }
    turn = -1;
    currentPlayer = 0;
    board.resetBoard();
    continueGame = true;
    advanceGame();
    return 'CLEAN BOARD';
  };

  const resetGame = () => {
    players = [];
    turn = -1;
    currentPlayer = 0;
    board.resetBoard();
    continueGame = true;
    return 'CLEAN BOARD';
  };

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
  };
})();
// eslint-enable-next-line no-unused-vars
