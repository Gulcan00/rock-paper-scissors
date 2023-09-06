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

        if (playerScore === 5 || computerScore === 5) {
            finalResult();
        }
    })
})

function finalResult() {
    const winner = document.createElement("div");
    
    if (playerScore === 5) {
            winner.innerText = "You won!";
    }
    
    if (computerScore === 5) {
            winner.innerText = "Computer wins!";
    }

    //Reset scores
    playerScore = 0;
    computerScore = 0;
    player.innerText = 0;
    computer.innerText = 0;
    const result = document.getElementById("round-result");
    result.innerText = null;
         

    const results = document.querySelector(".results");
    results.appendChild(winner);

    setTimeout(() => {
        results.removeChild(winner);
    }, 6000);
}