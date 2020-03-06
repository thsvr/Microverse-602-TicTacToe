import { gameModule } from './logic';

const cells = document.getElementsByClassName('cell');
const scores = document.getElementsByClassName('player-score');
const namesDisplay = document.querySelectorAll('.name');
const message = document.querySelector('.msg');

const print = (element) => {
  const domElement = element;
  element.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    const symbol = gameModule.makeMove(element.id);
    // eslint-enable-next-line no-undef
    let msgPlayer = "It's a TIE!";
    if (symbol) {
      domElement.innerHTML = `<span class="${symbol[0]}">${symbol[0]}</span>`;
      if (symbol[1][0] === 'WIN') {
        const score = symbol[1][2];
        scores[symbol[1][1]].innerText = score;
        document.querySelector('.play-again').classList.remove('hidden');
        // eslint-disable-next-line no-undef
        msgPlayer = `${gameModule.getPlayers()[symbol[1][1]].getName()} is the winner of this round!`;
        // eslint-enable-next-line no-undef
      } else if (symbol[1] === 'TIE') {
        document.querySelector('.play-again').classList.remove('hidden');
      }
      message.innerText = msgPlayer;
    }
  });
};

[...cells].forEach(print);

const cleanString = (element, string = '') => {
  const domElement = element;
  if (typeof string === 'number') {
    domElement.innerText = '';
  } else {
    domElement.innerText = string;
  }
};

// eslint-disable-next-line no-unused-vars
const resetGame = () => {
  // eslint-disable-next-line no-undef
  if (gameModule.resetGame() === 'CLEAN BOARD') {
  // eslint-enable-next-line no-undef
    [...cells].forEach(cleanString);
    cleanString(scores[0], '0');
    cleanString(scores[1], '0');
    cleanString(namesDisplay[0], '____');
    cleanString(namesDisplay[1], '____');
    document.querySelector('.start-game').classList.remove('hidden');
    document.querySelector('.play-again').classList.add('hidden');
  }
};
// eslint-enable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
const playAgain = () => {
  // eslint-disable-next-line no-undef
  const result = gameModule.playAgain();
  if (result === 'CLEAN BOARD') {
    [...cells].forEach(cleanString);
    document.querySelector('.play-again').classList.add('hidden');
  }
};
// eslint-enable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
const startGame = () => {
  const player1 = document.querySelector('[name="player1"]');
  const player2 = document.querySelector('[name="player2"]');
  if (player1.value.length > 0 && player2.value.length > 0) {
    namesDisplay[0].innerText = player1.value;
    namesDisplay[1].innerText = player2.value;
    // eslint-disable-next-line no-undef
    gameModule.startGame(player1.value, player2.value);
    // eslint-enable-next-line no-undef
    document.querySelector('.start-game').classList.add('hidden');
    player1.value = '';
    player2.value = '';
  }
};
// eslint-enable-next-line no-unused-vars

window.onload = () => {
  const startGameBtn = document.getElementById('start-game');
  const restartGameBtn = document.getElementById('play-again');
  const resetGameBtn = document.getElementById('reset-game');
  
  startGameBtn.addEventListener('submit', () => startGame(startGameBtn));

  restartGameBtn.addEventListener('click', () => playAgain());

  resetGameBtn.addEventListener('click', () => resetGame());
}