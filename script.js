
let computerChoice = Math.floor(Math.random() * 3) + 1;

if (computerChoice == 1) {
    computerChoice = ("rock");
} else if (computerChoice == 2) {
    computerChoice = ("paper");
} else {
    computerChoice = ("scissors");
}

let userChoice = prompt('Pick a choice between rock, paper and scissors!');
userChoice = userChoice.toLowerCase();

if (userChoice == "rock" && computerChoice == "scissors") {
    console.log("You Won!");
} else if (userChoice == "rock" && computerChoice == "paper") {
    console.log("Too bad, You Lost!");
} else if (userChoice == "paper" && computerChoice == "rock") {
    console.log("You Won!");
} else if (userChoice == "paper" && computerChoice == "scissors") {
    console.log("Too bad, You Lost!");
} else if (userChoice == "scissors" && computerChoice == "rock") {
    console.log("Too bad, You Lost!");
} else if (userChoice == "scissors" && computerChoice == "paper") {
    console.log("You Won!");
} else {
    console.log("It\'s a Tie!");
}

console.log(`Your choice was ${userChoice}!`);

console.log(`Computer\'s choice was ${computerChoice}!`);