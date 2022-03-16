const button = document.querySelector('button');
let moveSet = ['rock', 'paper', 'scissors'];

//choses random move for the computer
function computerPlay () {
    let randomIndex = (Math.floor((Math.random()) *(moveSet.length)));
    let computerChoice = (moveSet[randomIndex]);
    console.log('Computer:' + computerChoice);
    
}
//prompts the user to input their move
//does not continue if the input is invalid
//case insensitive; input transitioned into lowercase by default
function playerMove () {
    let playerChoice = ((prompt('Rock, paper, or scissors?')).toLowerCase());
    console.log(playerChoice);
        if (playerChoice == 'rock'){
            console.log('good choice');
        }
        else if (playerChoice == 'paper'){
            console.log('good choice');
        }
        else if (playerChoice == 'scissors'){
            console.log('good choice');
        }
        else {
            console.log('try again');
            playerMove();
        }
}
//compares the moves of computer and player
function playRound () {
    playerMove();
    computerPlay();

    if (computerChoice == playerChoice) {
        console.log('tie!');
    }
    if (playerChoice == 'rock' && computerChoice == 'scissors'){
        console.log('you won!');
    }
    if (playerChoice == 'paper' && computerChoice == 'rock'){
        console.log('you won!');
    }
    if (playerChoice == 'scissors' && computerChoice == 'paper'){
    console.log('you won!');
    }
}
//!!! bug: computerPlay is not entering a defined string inside the playRound function
button.addEventListener('click', playRound);