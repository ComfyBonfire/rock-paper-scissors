const buttons = document.querySelectorAll('button');
const start = document.querySelector('#start');
let user;
let options = ['rock', 'paper', 'scissors'];

function random() {
    return (options[Math.floor(Math.random() * options.length)]);
}

function round() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            user = button.id;
            random()
            let computer = random();
            if (computer === user) {
                alert('Draw');
            } else if (computer === 'rock' && user === 'scissors') {
                alert('you lose');
            } else if (computer === 'paper' && user === 'rock') {
                alert('you lose');
            } else if (computer === 'scissors' && user === 'paper') {
                alert('you lose');
            } else {
                alert('you win');
            }
        });
    });
}

start.addEventListener('click', round);