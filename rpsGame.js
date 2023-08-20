function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randIndex = Math.floor(Math.random() * 3); //get number 0 - 2 inclusive
    return choices[randIndex];
}


function playRound(playerSelection, computerSelection) {
    //Capitalize first letter of playerSelection
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    if(playerSelection === computerSelection) {
        return `It's a tie!`;
    } else if(playerSelection === 'Rock') {
        if(computerSelection === 'Scissors') {
            return 'You win! Rock beats Scissors'; 
        } else {
            return 'You lose! Paper beats Rock'; 
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
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter rock, paper or scissors: ");
        while (!['rock', 'paper', 'scissors'].includes(playerSelection.toLowerCase())) {
            playerSelection = prompt("Invalid input. Enter rock, paper or scissors: ");
        }
        let computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);
        if (result.includes('win')) {
            playerScore++;
        } else if (result.includes('lose')) {
            computerScore++;
        }
        console.log(result);
        console.log(`Player score: ${playerScore}, Computer Score: ${computerScore}`);
    }

    let winner;
    if(playerScore > computerScore) {
        winner = 'Player wins!';
    } else if (playerScore < computerScore) {
        winner = 'Computer wins!';
    } else {
        winner = 'It is a tie!';
    }
    console.log(winner);
}