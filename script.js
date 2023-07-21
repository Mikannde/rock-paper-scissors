const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const i = Math.floor(Math.random() * 3);
    return choices[i];
}

function playRound() {
    const playerChoice = prompt("Rock, paper, scissors? ").toLowerCase();
    const computerChoice = getComputerChoice().toLowerCase();

    console.log(computerChoice);

    if (playerChoice === computerChoice) {
        return "Draw!";
    }
    if (playerChoice === choices[0]) {
        if (computerChoice === choices[1]) {
            return "You lose! Paper beats rock.";
        } 
        return "You win! Rock beats scissors.";
    } 
    if (playerChoice === choices[1]) {
        if (computerChoice === choices[0]) {
            return "You win! Paper beats rock.";
        } 
        return "You lose! Scissors beat paper.";
    } 
    if (playerChoice === choices[2]) {
        if (computerChoice === choices[0]) {
            return "You lose! Rock beats scissors.";
        } 
        return "You win! Scissors beat paper.";
    } 
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        const score = playRound();
        console.log(score);
        if(score.includes("You win!")) {
            playerScore++;
        } 
        if(score.includes("You lose!")) {
            computerScore++;
        } 
    }

    if(playerScore > computerScore) {
        return "You won the game!";
    } else if(computerScore > playerScore) {
        return "You lost the game!";
    } 
    return "Game ended in a draw."
}

console.log(game());