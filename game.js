
const button = document.querySelector('button');
let moveSet = ['rock', 'paper', 'scissors'];
let points = 0;

//choses random move for the computer
function computerPlay () {
    let randomIndex = (Math.floor((Math.random()) *(moveSet.length)));
    console.log('Computer: ' + moveSet[randomIndex]);
    return moveSet[randomIndex];    
}
//prompts the user to input their move
//does not continue if the input is invalid
//case insensitive; input transitioned into lowercase by default
function playerMove () {
    let playerChoice = ((prompt('Rock, paper, or scissors?')).toLowerCase());
    console.log("player: " + playerChoice)
        if (playerChoice == 'rock'){
        }
        else if (playerChoice == 'paper'){  
        }
        else if (playerChoice == 'scissors'){
        }
        else {
            console.log('try again');
            playerMove();
        }
    return playerChoice;
}
//compares the moves of computer and player
function playRound () {
    let playerChoice = playerMove();
    let computerChoice = computerPlay();
    let score = 0;
    if (computerChoice == playerChoice) {
        console.log('tie!');
    }
    else if (playerChoice == 'rock' && computerChoice == 'scissors'){
        console.log('you won!');
        let points = (+score + 1);
        return points;
    }
    else if (playerChoice == 'paper' && computerChoice == 'rock'){
        console.log('you won!');
        let points = (+score + 1);
        return points;
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper'){
    console.log('you won!');
    let points = (+score + 1);
    return points;
    }
    else {
        console.log('you lost!');
    }
}
//plays a 5-round game
function game () {
    let scoreBoard = parseInt(points, 10);
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    console.log('your score was: ' + +scoreBoard);
}
button.addEventListener('click', game); 