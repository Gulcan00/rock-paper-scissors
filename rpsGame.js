function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randIndex = Math.floor(Math.random() * 3); //get number 0 - 2 inclusive
    return choices[randIndex];
}

//Gets selection (rock, paper, or scissors) and returns what that selection beats
function beats(selection) {
    switch (selection) {
        case "Rock": return "Scissors";
        case "Scissors": return "Paper";
        default: return "Rock";
    }
}

function playRound(playerSelection, computerSelection) {
    //Capitalize first letter of playerSelection
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection === computerSelection) {
        return `It's a tie!`;
    } 

    if (beats(playerSelection) === computerSelection) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }

    return `You lose! ${computerSelection} beats ${playerSelection}`;
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