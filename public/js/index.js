const cells = document.getElementsByClassName("cell");

const print = (element) => {
    element.addEventListener("click", (event) => {
        console.log(element.innerText)
        let symbol = gameModule.makeMove(element.id) 
        if(symbol) {
           element.innerText = symbol 
        }     
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


