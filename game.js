
const button = document.querySelector('button');
let moveSet = ['rock', 'paper', 'scissors'];
<<<<<<< HEAD
//creates variables for the scores
let playerScore = 0;
let computerScore = 0;
=======
let points = 0;
>>>>>>> refs/remotes/origin/main

//choses random move for the computer
function computerPlay () {
    let randomIndex = (Math.floor((Math.random()) *(moveSet.length)));
<<<<<<< HEAD
    return (moveSet[randomIndex]);
    
=======
    console.log('Computer: ' + moveSet[randomIndex]);
    return moveSet[randomIndex];    
>>>>>>> refs/remotes/origin/main
}
//prompts the user to input their move
//does not continue if the input is invalid
//case insensitive; input transitioned into lowercase by default
function playerMove () {
<<<<<<< HEAD
    return ((prompt('Rock, paper, or scissors?')).toLowerCase());
}
function playRound () {
    let playerChoice = playerMove();
    let computerChoice = computerPlay();

    console.log(playerChoice);
//gives player feedback
        if (playerChoice != 'rock'){
        }
        else if (playerChoice != 'paper'){
        }
        else if (playerChoice != 'scissors'){
=======
    let playerChoice = ((prompt('Rock, paper, or scissors?')).toLowerCase());
    console.log("player: " + playerChoice)
        if (playerChoice == 'rock'){
        }
        else if (playerChoice == 'paper'){  
        }
        else if (playerChoice == 'scissors'){
>>>>>>> refs/remotes/origin/main
        }
        else {
            console.log('try again, invalid input');
        }
<<<<<<< HEAD

        console.log('Computer:' + computerChoice);
        

=======
    return playerChoice;
}
//compares the moves of computer and player
function playRound () {
    let playerChoice = playerMove();
    let computerChoice = computerPlay();
    let score = 0;
>>>>>>> refs/remotes/origin/main
    if (computerChoice == playerChoice) {
        console.log('tie!');
    }
    else if (playerChoice == 'rock' && computerChoice == 'scissors'){
        console.log('you won!');
<<<<<<< HEAD
        playerScore = (playerScore + 1);
    }
    if (playerChoice == 'rock' && computerChoice == 'paper'){
        console.log('you lost');
        computerScore = (computerScore + 1);
=======
        let points = (+score + 1);
        return points;
>>>>>>> refs/remotes/origin/main
    }
    else if (playerChoice == 'paper' && computerChoice == 'rock'){
        console.log('you won!');
<<<<<<< HEAD
        playerScore = (playerScore + 1);
    }
    if (playerChoice == 'paper' && computerChoice == 'scissors'){
        console.log('you lost!');
        computerScore = (computerScore + 1);
=======
        let points = (+score + 1);
        return points;
>>>>>>> refs/remotes/origin/main
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper'){
    console.log('you won!');
<<<<<<< HEAD
        playerScore = (playerScore + 1);
    }
    if (playerChoice == 'scissors' && computerChoice == 'rock'){
        console.log('you lost!');
        computerScore = (computerScore + 1);    
    }
    return playerScore;
}
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
=======
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
>>>>>>> refs/remotes/origin/main
