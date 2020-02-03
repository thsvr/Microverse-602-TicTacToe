const cells = document.getElementsByClassName("cell");

const print = (element) => {
    element.addEventListener("click", (event) => {
        console.log(element.innerText)
        element.innerText = gameModule.makeMove(element.id)      
    })  
}

[...cells].forEach(print);

const cleanString = (element) => {
    element.innerText = '';
}

const resetGame = () => {
    if(gameModule.resetGame() === 'CLEAN BOARD') {
        [...cells].forEach(cleanString);
    }
}

const playAgain = () => {
    if(gameModule.playAgain() === 'CLEAN BOARD') {
        [...cells].forEach(cleanString);
    }
}


