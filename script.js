function random(){
    let arr = ['rock', 'paper', 'scissors']
    let randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}
function singleRound() {
    let user = prompt("Choose between: rock, paper and scissors!").toLowerCase()
    let randomChoice = random()
    if (randomChoice === 'rock' && user === 'paper') {
        wonCounter = wonCounter + 1;
        console.log(`${user} beats ${randomChoice}! You Won!`)
    } else if (randomChoice === 'paper' && user === 'scissors') {
        wonCounter = wonCounter + 1;
        console.log(`${user} beats ${randomChoice}! You Won!`)
    } else if (randomChoice === 'scissors' && user === 'rock') {
        wonCounter = wonCounter + 1;
        console.log(`${user} beats ${randomChoice}! You Won!`)
    } else if (randomChoice === user) {
        console.log("It\'s a tie!")
    } else {
        lossCounter = lossCounter + 1;
        console.log(`${randomChoice} beats ${user}! You Loss!`)
    }
};

let wonCounter = 0
let lossCounter = 0

function endGame() {
    if (wonCounter > lossCounter) {
        console.log("Game Over! You Win! :)");
    } else if (lossCounter > wonCounter) {
        console.log("Game Over! You Lost! :(");
    }
}

function game() {
    singleRound();
    if(wonCounter < 5 && lossCounter < 5){
        game();
    } else {
        endGame();
    }
}

game();
