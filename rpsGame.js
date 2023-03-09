function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
}

function getWinner(player1, player2) {
    if(player1 === player2) {
        return `It's a tie!`;
    } else if (player1 === 'Rock') {

    }
     
}

function playRound(playerSelection, computerSelection) {
    //Capitalize first letter of playerSelection
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    if(playerSelection === computerSelection) {
        return `It's a tie!`; //return tie
    } else if(playerSelection === 'Rock') {
        if(computerSelection === 'Scissors') {
            return 'You win! Rock beats Scissors'; //return player
        } else {
            return 'You lose! Paper beats Rock'; //return computer
        } 
    } else if(playerSelection === 'Paper') {
        if(computerSelection === 'Scissors') {
            return 'You lose! Scissors beats Paper';
        } else {
            return 'You win! Paper beats Rock';
        } 
    } else {
        if(computerSelection === 'Rock') {
            return 'You lose! Rock beats Scissors';
        } else {
            return 'You win! Scissors beats Paper';
        } 
    }
}

function game() {
    let playerScore = 0, computerScore = 0;
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter rock, paper or scissors: ");
        while(playerSelection.toLowerCase() != ('rock' || 'paper' || 'scissors')) {
            playerSelection = prompt("Invalid input. Enter rock, paper or scissors: ");
        }
        let computerSelection = getComputerChoice();

    }
}