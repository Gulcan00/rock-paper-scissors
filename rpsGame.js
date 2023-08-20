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

let buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = button.getAttribute("data-name");
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
    })
})