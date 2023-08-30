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
        const text = document.createElement("p");
        text.setAttribute("id", "result");
        text.innerText = playRound(playerSelection, computerSelection);
        results.insertBefore(text, results.lastChild);

        player.innerText = playerScore;
        computer.innerText = computerScore;

        removeResult();
    })
})

function removeResult() {
    setTimeout(() => {
        const result = document.getElementById("result");
        const results = document.querySelector(".results");

        results.removeChild(result);
    }, 3000)
}