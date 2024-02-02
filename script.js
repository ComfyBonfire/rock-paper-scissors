const buttons = document.querySelectorAll('button');
const start = document.querySelector('#start');
let message = document.querySelector('#message');
let user;
let options = ['ROCK', 'PAPER', 'SCISSORS'];
let user_score = 0;
let computer_score = 0;

function random() {
    return (options[Math.floor(Math.random() * options.length)]);
}

function round() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            user = button.id;
            message.innerText = "";
            random()
            let computer = random();
            if (user_score < 5 && computer_score < 5) {
                if (computer === user) {
                    message.innerText = ('Draw');
                } else if (computer === 'ROCK' && user === 'SCISSORS') {
                    computer_score += 1;
                    message.innerText = (`You Lose! ${computer} beats ${user} SCORE: USER = ${user_score} - COMPUTER = ${computer_score}`);
                } else if (computer === 'PAPER' && user === 'ROCK') {
                    computer_score += 1;
                    message.innerText = (`You Lose! ${computer} beats ${user} SCORE: USER = ${user_score} - COMPUTER = ${computer_score}`);
                } else if (computer === 'SCISSORS' && user === 'PAPER') {
                    computer_score += 1;
                    message.innerText = (`You Lose! ${computer} beats ${user} SCORE: USER = ${user_score} - COMPUTER = ${computer_score}`);
                } else {
                    user_score += 1;
                    message.innerText = (`You Win! ${user} beats ${computer} SCORE: USER = ${user_score} - COMPUTER = ${computer_score}`);
                }
            } else {
                message.innerText = (`Game Over! Final Score: User = ${user_score} - Computer = ${computer_score}`);
            }
        });
    });
}

start.addEventListener('click', round);