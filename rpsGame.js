let playerScore = 0;
let computerScore = 0;

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
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }

    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
}

let buttons = document.querySelectorAll(".button");
const player = document.getElementById("playerScore");
const computer = document.getElementById("computerScore");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = button.getAttribute("data-name");
        const computerSelection = getComputerChoice();

        const results = document.querySelector(".results");
        const result = document.getElementById("round-result");
        result.innerText = playRound(playerSelection, computerSelection);

        player.innerText = playerScore;
        computer.innerText = computerScore;

        finalResult();
    })
})

function finalResult() {
    const winner = document.createElement("div");

    if (playerScore + computerScore >= 5) {
        if (playerScore > computerScore) {
            winner.innerText = "You won!";
         } else if (computerScore > playerScore) {
            winner.innerText = "Computer wins!";
         } else {
            winner.innerText = "It's a tie!";
         }
    }

    const results = document.querySelector(".results");
    results.appendChild(winner);
}