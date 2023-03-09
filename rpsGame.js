function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
}

function playRound(playerSelection, computerSelection) {
    //Capitalize first letter of playerSelection
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

    if(playerSelection === 'Rock') {
        if(computerSelection === 'Scissors') {
            return 'You win! Rock beats Scissors';
        } else if(computerSelection === 'Paper') {
            return 'You lose! Paper beats Rock';
        } else {
            return `It's a tie!`;
        }
    } else if(playerSelection === 'Paper') {
        if(computerSelection === 'Scissors') {
            return 'You lose! Scissors beats Paper';
        } else if(computerSelection === 'Rock') {
            return 'You win! Paper beats Rock';
        } else {
            return `It's a tie!`;
        }
    } else {
        if(computerSelection === 'Rock') {
            return 'You lose! Rock beats Scissors';
        } else if(computerSelection === 'Paper') {
            return 'You win! Scissors beats Paper';
        } else {
            return `It's a tie!`;
        }
    }
}