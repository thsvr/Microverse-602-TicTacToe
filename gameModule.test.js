import { gameModule } from './src/logic';

const {getTurn,
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

    it('a advanceGame property', () => {
      expect(advanceGame).toBeTruthy();
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

    it('is a function called advanceGame', () => {
    expect(typeof advanceGame).toBe('function');
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

  describe('gameModule getTurn', () =>{
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
      expect(getTurn()-previousTurn).toBe(1);
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
      for (let i = 0; i <= 10; i += 1){
        incrementTurn();
        setCurrentPlayer();
        arr.push(getCurrentPlayer());
      }
      const result = arr.every((player) => [0,1].includes(player));
      expect(result).toBe(true);
    });
  });

  

  