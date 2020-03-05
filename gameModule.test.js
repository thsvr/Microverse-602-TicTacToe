import { gameModule, gameBoardModule, PlayerFactory } from './src/logic';

const player1 = 'player1';
const player2 = 'player2';

const { getTurn,
  incrementTurn,
  getCurrentPlayer,
  setCurrentPlayer,
  getPlayers,
  setPlayers,
  getBoard,
  startGame,
  resetGame,
  playAgain,
  cleanGame,
  makeMove } = gameModule;

it('is an object', () => {
  expect(typeof gameModule).toBe('object');
});

describe('gameModule object has', () => {
  it('a getTurn property', () => {
    expect(getTurn).toBeTruthy();
  });

  it('a incrementTurn property', () => {
    expect(incrementTurn).toBeTruthy();
  });

  it('a getCurrentPlayer property', () => {
    expect(getCurrentPlayer).toBeTruthy();
  });

  it('a setCurrentPlayer property', () => {
    expect(setCurrentPlayer).toBeTruthy();
  });

  it('a getPlayers property', () => {
    expect(getPlayers).toBeTruthy();
  });

  it('a setPlayers property', () => {
    expect(setPlayers).toBeTruthy();
  });

  it('a getBoard property', () => {
    expect(getBoard).toBeTruthy();
  });

  it('a startGame property', () => {
    expect(startGame).toBeTruthy();
  });

  it('a resetGame property', () => {
    expect(resetGame).toBeTruthy();
  });

  it('a playAgain property', () => {
    expect(playAgain).toBeTruthy();
  });

  it('a makeMove property', () => {
    expect(makeMove).toBeTruthy();
  });
});

describe('gameModule returns an object with propertie which', () => {

  it('is a function called getTurn', () => {
    expect(typeof getTurn).toBe('function');
  });

  it('is a function called incrementTurn', () => {
    expect(typeof incrementTurn).toBe('function');
  });

  it('is a function called getCurrentPlayer', () => {
    expect(typeof getCurrentPlayer).toBe('function');
  });

  it('is a function called setCurrentPlayer', () => {
    expect(typeof setCurrentPlayer).toBe('function');
  });

  it('is a function called getPlayers', () => {
    expect(typeof getPlayers).toBe('function');
  });

  it('is a function called setPlayers', () => {
    expect(typeof setPlayers).toBe('function');
  });

  it('is a function called getBoard', () => {
    expect(typeof getBoard).toBe('function');
  });

  it('is a function called startGame', () => {
    expect(typeof startGame).toBe('function');
  });

  it('is a function called resetGame', () => {
    expect(typeof resetGame).toBe('function');
  });

  it('is a function called playAgain', () => {
    expect(typeof playAgain).toBe('function');
  });

  it('is a function called makeMove', () => {
    expect(typeof makeMove).toBe('function');
  });
});

describe('gameModule getTurn', () => {
  it('does not have any parameters', () => {
    expect(getTurn.length).toBe(0);
  });

  it('returns a number', () => {
    expect(typeof getTurn()).toBe('number');
  });

  it('returns a integer', () => {
    expect(Number.isInteger(getTurn())).toBe(true);
  });

  it('returns the current turn', () => {
    const previousTurn = getTurn();
    incrementTurn();
    expect(getTurn()).toBe(previousTurn + 1);
  });
});

describe('gameModule incrementTurn', () => {

  it('does not have any parameters', () => {
    expect(incrementTurn.length).toBe(0);
  });

  it('does not have a return value', () => {
    expect(incrementTurn()).toBe(undefined);
  });

  it('increments the turn by 1', () => {
    const previousTurn = getTurn();
    incrementTurn();
    expect(getTurn() - previousTurn).toBe(1);
  });
});

describe('gameModule getCurrentPlayer', () => {
  it('does not have any parameter', () => {
    expect(getCurrentPlayer.length).toBe(0);
  });

  it('returns a number', () => {
    expect(typeof getCurrentPlayer()).toBe('number');
  });

  it('returns a integer', () => {
    expect(Number.isInteger(getCurrentPlayer())).toBe(true);
  });
});

describe('gameModule setCurrentPlayer', () => {
  it('does not have any parameter', () => {
    expect(setCurrentPlayer.length).toBe(0);
  });

  it('does not have a returning value', () => {
    expect(setCurrentPlayer()).toBe(undefined);
  });

  it('changes the value of the currentPlayer based on the turn value', () => {
    const player = getCurrentPlayer();
    incrementTurn();
    setCurrentPlayer();
    expect(getCurrentPlayer()).not.toBe(player);
  });

  it('toggles the value of the currentPlayer according if the turn is even or odd', () => {
    const player = getCurrentPlayer();
    incrementTurn();
    setCurrentPlayer();
    incrementTurn();
    setCurrentPlayer();
    expect(getCurrentPlayer()).toBe(player);
  });

  it('can only change the value of the currentPlayer to 0 or 1', () => {
    const arr = [getCurrentPlayer()];
    for (let i = 0; i <= 10; i += 1) {
      incrementTurn();
      setCurrentPlayer();
      arr.push(getCurrentPlayer());
    }
    const result = arr.every((player) => [0, 1].includes(player));
    expect(result).toBe(true);
  });
});

describe('gameModule getBoard', () => {
  it('does not have any parameter', () => {
    expect(getBoard.length).toBe(0);
  });

  it('returns an object', () => {
    expect(typeof getBoard()).toBe('object');
  });

  it('returns an object with a getBoard property', () => {
    expect(getBoard().getBoard).toBeTruthy();
  });
});

describe('gameModule startGame', () => {
  it('takes 2 parameters', () => {
    expect(startGame.length).toBe(2);
  });

  it('does not return a value', () => {
    expect(startGame(player1, player2)).toBe(undefined);
  });

  resetGame();
});

describe('gameModule makeMove', () => {
  it('takes 1 parameters', () => {
    expect(makeMove.length).toBe(1);
  });

  it('it returns false if the game is not started', () => {
    resetGame();
    expect(makeMove('x')).toBe(false);
  });

  it('it returns an array if the game is won over', () => {
    resetGame();
    startGame(player1, player2);
    makeMove(0);
    makeMove(1);
    makeMove(3);
    makeMove(2);
    const winningMove = makeMove(6);
    expect(Array.isArray(winningMove)).toBe(true);
  });

  it('it returns false if the game is tied over', () => {
    resetGame();
    startGame(player1, player2);
    makeMove(0);
    makeMove(1);
    makeMove(4);
    makeMove(2);
    makeMove(5);
    makeMove(3);
    makeMove(6);
    makeMove(8);
    makeMove(7);

    expect(makeMove(6)).toBe(false);
  });
  resetGame();
});

describe('gameModule playAgain', () => {
  startGame(player1, player2);
  makeMove(0);
  makeMove(1);
  makeMove(4);
  makeMove(2);
  makeMove(5);
  makeMove(3);
  makeMove(6);
  makeMove(8);
  makeMove(7);

  it('takes 0 parameters', () => {
    expect(playAgain.length).toBe(0);
  });
  
  it('returns the string CLEAN BOARD if continueGame is false', () => {
    expect(playAgain()).toBe('CLEAN BOARD');
  });

  it('returns the null if game is not over', () => {
    expect(playAgain()).toBe(null);
  });
  resetGame();
});

describe('gameModule cleanGame', () => {
  it('resets the turn number to -1', () => {
    startGame(player1, player2);
    makeMove(0);
    makeMove(1);
    makeMove(4);
    makeMove(2);
    makeMove(5);
    makeMove(3);
    makeMove(6);
    makeMove(8);
    makeMove(7);
    cleanGame();

    expect(getTurn()).toBe(-1);
    resetGame();
  });
  
  it('resets the currentPlayer to 0', () => {
    startGame(player1, player2);
    makeMove(0);
    makeMove(1);
    makeMove(4);
    makeMove(2);
    makeMove(5);
    makeMove(3);
    makeMove(6);
    makeMove(8);
    makeMove(7);
    cleanGame();

    expect(getCurrentPlayer()).toBe(0);
    resetGame();
  });

  it('resets the board to be full of only 0s', () => {
    startGame(player1, player2);
    makeMove(0);
    makeMove(1);
    makeMove(4);
    makeMove(2);
    makeMove(5);
    makeMove(3);
    makeMove(6);
    makeMove(8);
    makeMove(7);
    const prevBoard = getBoard().getBoard().slice().every(n => n === 0);
    cleanGame();
    const newBoard = getBoard().getBoard().every(n => n === 0);

    expect(prevBoard === newBoard).toBe(false);
  });

  resetGame();
});

describe('gameModule resetGame', () => {
  startGame(player1, player2);
  makeMove(0);
  makeMove(1);
  resetGame();

  expect(getPlayers.length).toBe(0);
});
