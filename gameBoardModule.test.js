import { gameBoardModule } from './src/logic';
import sameContentArr from './test-helpers/index'

const { getBoard, makeMove, checkWin, checkTie, resetBoard } = gameBoardModule;

it('is an object', () => {
  expect(typeof gameBoardModule).toBe('object');
});

describe('gameBoardModule object has', () => {
  it('a getBoard property', () => {
    expect(getBoard).toBeTruthy();
  });

  it('a makeMove property', () => {
    expect(makeMove).toBeTruthy();
  });

  it('a checkWin property', () => {
    expect(checkWin).toBeTruthy();
  });

  it('a checkTie property', () => {
    expect(checkTie).toBeTruthy();
  });

  it('a resetBoard property', () => {
    expect(resetBoard).toBeTruthy();
  });
});

describe('gameBoardModule returns an object with propertie which', () => {
  it('is a function called getBoard ', () => {
    expect(typeof getBoard).toBe('function');
  });

  it('is a function called makeMove ', () => {
    expect(typeof makeMove).toBe('function');
  });

  it('is a function called checkWin ', () => {
    expect(typeof checkWin).toBe('function');
  });

  it('is a function called checkTie ', () => {
    expect(typeof checkTie).toBe('function');
  });

  it('is a function called resetBoard ', () => {
    expect(typeof resetBoard).toBe('function');
  });
});

describe('gameBoardModule getBoard method', () => {
  it('takes zero argument', () => {
    expect(getBoard.length).toBe(0)
  });

  it('returns an array', () => {
    expect(Array.isArray(getBoard())).toBeTruthy();
  });

  it('has a length of 9', () => {
    expect(getBoard().length).toBe(9);
  });

  it('returns the current state of the board array(1)', () => {
    expect(getBoard()[0]).toBe(0);
  });

  it('returns the current state of the board array(2)', () => {
    makeMove(0, 'x');
    expect(getBoard()[0]).toBe('x');
    resetBoard();
  });
});

describe('gameBoardModule makeMove method', () => {
  it('takes two arguments', () => {
    expect(makeMove.length).toBe(2)
  });

  it('returns false if the first argument does not correspond to a 0 in the board array(1)', () => {
    expect(makeMove(9, 'x')).toBeFalsy();
  });

  it('returns false if the first argument does not correspond to a 0 in the board array(1)', () => {
    makeMove(8, 'x');
    expect(makeMove(8, 'x')).toBeFalsy();
  });

  it('returns false if the second argument is falsy(1)', () => {
    expect(makeMove(0, null)).toBeFalsy();
  });

  it('returns false if the second argument is falsy(2)', () => {
    expect(makeMove(0)).toBeFalsy();
  });

  it('returns false if the second argument is falsy(3)', () => {
    expect(makeMove(0, false)).toBeFalsy();
  });

  it('returns an array if both arguments are valid and board cell is 0', () => {
    expect(Array.isArray(makeMove(0, 'o'))).toBeTruthy();
  });

  it('returns the game board array', () => {
    const boardAfterMove = makeMove(1, 'o');
    const currentBoard = getBoard();
    expect(sameContentArr(boardAfterMove, currentBoard)).toBeTruthy();
  });

  gameBoardModule.resetBoard();
});

describe('gameBoardModule checkWin method', () => {
  it('takes one argument', () => {
    expect(gameBoardModule.checkWin.length).toBe(1)
  });

  it('returns false when the board is empty(only has 0s)', () => {
    expect(gameBoardModule.checkWin('x')).toBeFalsy();
  });

  it('returns false when there is no winning pattern with repeated symbols in the board array', () => {
    gameBoardModule.makeMove(0, 'x');
    gameBoardModule.makeMove(4, 'x');
    gameBoardModule.makeMove(1, 'o');
    gameBoardModule.makeMove(3, 'o');
    gameBoardModule.makeMove(7, 'o');

    expect(gameBoardModule.checkWin('x')).toBeFalsy();
  });

  it('returns true when there is a winning pattern with repeated symbols in the board array (diagonally)', () => {
    gameBoardModule.resetBoard();
    gameBoardModule.makeMove(0, 'x');
    gameBoardModule.makeMove(4, 'x');
    gameBoardModule.makeMove(1, 'o');
    gameBoardModule.makeMove(3, 'o');
    gameBoardModule.makeMove(7, 'o');
    gameBoardModule.makeMove(8, 'x');

    expect(gameBoardModule.checkWin('x')).toBeTruthy();
  });

  it('returns true when there is a winning pattern with repeated symbols in the board array (horizontally)', () => {
    gameBoardModule.resetBoard();
    gameBoardModule.makeMove(0, 'o');
    gameBoardModule.makeMove(1, 'o');
    gameBoardModule.makeMove(2, 'o');
    gameBoardModule.makeMove(3, 'x');
    gameBoardModule.makeMove(7, 'x');
    gameBoardModule.makeMove(8, 'x');

    expect(gameBoardModule.checkWin('o')).toBeTruthy();
  });

  it('returns true when there is a winning pattern with repeated symbols in the board array (vertically)', () => {
    gameBoardModule.resetBoard();
    gameBoardModule.makeMove(1, 'x');
    gameBoardModule.makeMove(4, 'x');
    gameBoardModule.makeMove(7, 'x');
    gameBoardModule.makeMove(8, 'o');
    gameBoardModule.makeMove(0, 'o');
    gameBoardModule.makeMove(6, 'o');

    expect(gameBoardModule.checkWin('x')).toBeTruthy();
  });
  gameBoardModule.resetBoard();
});

describe('gameBoardModule checkTie method', () => {
  it('takes zero argument', () => {
    expect(gameBoardModule.checkTie.length).toBe(0);
  });

  it('returns false if board array has at least one 0 (1)', () => {
    expect(gameBoardModule.checkTie()).toBe(false);
  });

  it('returns false if board array has at least one 0 (2)', () => {
    gameBoardModule.makeMove(0, 'x');
    gameBoardModule.makeMove(8, 'o');
    gameBoardModule.makeMove(4, 'x');
    gameBoardModule.makeMove(2, 'o');
    gameBoardModule.makeMove(5, 'x');
    gameBoardModule.makeMove(1, 'o');
    gameBoardModule.makeMove(6, 'o');
    gameBoardModule.makeMove(7, 'x');

    expect(gameBoardModule.checkTie()).toBe(false);
  });

  it('returns true if board array doesn\'t have any 0', () => {
    gameBoardModule.makeMove(3, 'o');

    expect(gameBoardModule.checkTie()).toBe(true);
  });

  gameBoardModule.resetBoard();
});

describe('gameBoardModule resetBoard method', () => {
  it('takes zero argument', () => {
    expect(gameBoardModule.resetBoard.length).toBe(0);
  });

  it('returns undefined', () => {
    expect(gameBoardModule.resetBoard()).toBe(undefined);
  });

  it('modifies the game board to be filled only by 0s(1)', () => {
    gameBoardModule.resetBoard();

    const currentBoard = gameBoardModule.getBoard().every(cell => cell === 0);

    expect(currentBoard).toBe(true);
  });

  it('modifies the game board to be filled only by 0s(1)', () => {
    gameBoardModule.makeMove(5, 'x');
    gameBoardModule.makeMove(1, 'o');
    gameBoardModule.makeMove(6, 'o');
    gameBoardModule.makeMove(7, 'x');
    gameBoardModule.resetBoard();

    const currentBoard = gameBoardModule.getBoard().every(cell => cell === 0);

    expect(currentBoard).toBe(true);
  });
});