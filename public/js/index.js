const cells = document.getElementsByClassName("cell");
const scores = document.getElementsByClassName("player-score");
const namesDisplay = document.querySelectorAll('.name');

const print = (element) => {
    element.addEventListener("click", (event) => {
        let symbol = gameModule.makeMove(element.id) 
        if(symbol) {
           console.log(symbol)
           element.innerText = symbol[0]
           if (symbol[1][0] === 'WIN') {
            alert('Game over, WIN!')
            scores[symbol[1][1]].innerText = symbol[1][2]
           } else if (symbol[1] === 'TIE') {
            alert('Game over, it\'s a tie!')
           }
        }     
    })  
}

[...cells].forEach(print);

const cleanString = (element, string = '') => {
    if(typeof string === 'number'){
        element.innerText = '';
    } else {
    element.innerText = string;
    }
}

const resetGame = () => {
    if(gameModule.resetGame() === 'CLEAN BOARD') {
        [...cells].forEach(cleanString);
        cleanString(scores[0], '0');
        cleanString(scores[1], '0');
        cleanString(namesDisplay[0], '____');
        cleanString(namesDisplay[1], '____');
    }
}

const playAgain = () => {
    if(gameModule.playAgain() === 'CLEAN BOARD') {
        [...cells].forEach(cleanString);
    }
}


const startGame = () => {
    const player1 = document.querySelector('[name="player1"]').value;
    const player2 = document.querySelector('[name="player2"]').value;
    if (player1.length > 0 && player2.length > 0) {
        namesDisplay[0].innerText = player1
        namesDisplay[1].innerText = player2
        gameModule.startGame(player1, player2)
    }
}