const button = document.querySelector('button');
let moveSet = ['rock', 'paper', 'scissors'];
//creates variables for the scores
let playerScore = 0;
let computerScore = 0;

//choses random move for the computer
function computerPlay () {
    let randomIndex = (Math.floor((Math.random()) *(moveSet.length)));
    return (moveSet[randomIndex]);
    
}
//prompts the user to input their move
//does not continue if the input is invalid
//case insensitive; input transitioned into lowercase by default
function playerMove () {
    return ((prompt('Rock, paper, or scissors?')).toLowerCase());
}
function playRound () {
    let playerChoice = playerMove();
    let computerChoice = computerPlay();

    console.log(playerChoice);
//tells player if their input was valid
        if (playerChoice != 'rock'){
        }
        else if (playerChoice != 'paper'){
        }
        else if (playerChoice != 'scissors'){
        }
        else {
            console.log('try again, invalid input');
        }
        console.log('Computer:' + computerChoice);
//determines who won each round
//adds score to the winner of each round
    if (computerChoice == playerChoice) {
        console.log('tie!');
    }
    if (playerChoice == 'rock' && computerChoice == 'scissors'){
        console.log('you won!');
        playerScore = (playerScore + 1);
    }
    if (playerChoice == 'rock' && computerChoice == 'paper'){
        console.log('you lost');
        computerScore = (computerScore + 1);
    }
    if (playerChoice == 'paper' && computerChoice == 'rock'){
        console.log('you won!');
        playerScore = (playerScore + 1);
    }
    if (playerChoice == 'paper' && computerChoice == 'scissors'){
        console.log('you lost!');
        computerScore = (computerScore + 1);
    }
    if (playerChoice == 'scissors' && computerChoice == 'paper'){
    console.log('you won!');
        playerScore = (playerScore + 1);
    }
    if (playerChoice == 'scissors' && computerChoice == 'rock'){
        console.log('you lost!');
        computerScore = (computerScore + 1);    
    }
    return playerScore;
}
//runs playRound 5 times and determines who won the game
function game () {
    for (let i = 0; i < 5; i++) {
    playRound ();
    console.log(playerScore);
    }

    console.log('Player score: ' + playerScore + ' Computer score: ' + computerScore)

    if (playerScore > computerScore){
        console.log('congragulations! you won');
    }
    else if (playerScore < computerScore){
        console.log('Oh no! you lost');
    }
    else if ( playerScore == computerScore){
        console.log('It was a tie!');
    }
}    
button.addEventListener('click', game);