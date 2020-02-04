const cells = document.getElementsByClassName("cell");
const scores = document.getElementsByClassName("player-score");
const namesDisplay = document.querySelectorAll('.name');
const message = document.querySelector('.msg');

const print = (element) => {
  element.addEventListener("click", (event) => {
    let symbol = gameModule.makeMove(element.id)
    let msgPlayer = "It\'s a TIE!"
    if (symbol) {
      element.innerHTML = `<span class="${symbol[0]}">${symbol[0]}</span>`
      if (symbol[1][0] === 'WIN') {
        scores[symbol[1][1]].innerText = symbol[1][2]
        document.querySelector('.play-again').classList.remove('hidden')
        msgPlayer = `${gameModule.getPlayers()[symbol[1][1]].getName()} is the winner of this round!`
      } else if(symbol[1] === 'TIE') {
        document.querySelector('.play-again').classList.remove('hidden')
      }
      message.innerText = msgPlayer;
    }
  })
}

[...cells].forEach(print);

const cleanString = (element, string = '') => {
  if (typeof string === 'number') {
    element.innerText = '';
  } else {
    element.innerText = string;
  }
}

const resetGame = () => {
  if (gameModule.resetGame() === 'CLEAN BOARD') {
    [...cells].forEach(cleanString);
    cleanString(scores[0], '0');
    cleanString(scores[1], '0');
    cleanString(namesDisplay[0], '____');
    cleanString(namesDisplay[1], '____');
    document.querySelector('.start-game').classList.remove('hidden')
    document.querySelector('.play-again').classList.add('hidden')
  }
}

const playAgain = () => {
  if (gameModule.playAgain() === 'CLEAN BOARD') {
    [...cells].forEach(cleanString);
    document.querySelector('.play-again').classList.add('hidden');
  }
}


const startGame = () => {
  const player1 = document.querySelector('[name="player1"]');
  const player2 = document.querySelector('[name="player2"]');
  if (player1.value.length > 0 && player2.value.length > 0) {
    namesDisplay[0].innerText = player1.value
    namesDisplay[1].innerText = player2.value
    gameModule.startGame(player1.value, player2.value)
    document.querySelector('.start-game').classList.add('hidden')
    player1.value = '';
    player2.value = '';
  }
}