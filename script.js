//Game
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const i = Math.floor(Math.random() * 3);
    return choices[i];
}

let round = 0;
let playerScore = 0;
let computerScore = 0;


const container = document.querySelector('#container');

const header = document.createElement('h1');
header.textContent = "Rock, Paper, Scissors";
header.style.cssText = 'color: black';

const scoreDiv = document.createElement('div');
scoreDiv.innerHTML = "<p>Player score: " + playerScore + "</p>" + "<p>Computer score: " + computerScore + "</p>";


const btnReset = document.createElement('button');
btnReset.textContent = "Reset the game";

const gameDiv = document.createElement('div');

const headerRound = document.createElement('h3');
headerRound.textContent = "Round: " + round;
const playerPick = document.createElement('h4');
const computerPick = document.createElement('h4');

const btnRock = document.createElement('button');
btnRock.textContent = "Rock";
btnRock.addEventListener('click', () => {
    showScore("rock")
});
const btnPaper = document.createElement('button');
btnPaper.textContent = "Paper";
btnPaper.addEventListener('click', () => {
    showScore("paper")
});
const btnScissors = document.createElement('button');
btnScissors.textContent = "Scissors";
btnScissors.addEventListener('click', () => {
    showScore("scissors")
});

const headerScore = document.createElement('h3');


function playRound(playerChoice) {
    const computerChoice = getComputerChoice().toLowerCase();
    playerPick.textContent = "You picked " + playerChoice;
    computerPick.textContent = "Computer picked " + computerChoice;

    console.log(computerChoice);

    if (playerChoice === computerChoice) {
        return "Draw";
    }
    if (playerChoice === choices[0]) {
        if (computerChoice === choices[1]) {
            return "Lose";
        } else {
            return "Win";
        }
    } 
    if (playerChoice === choices[1]) {
        if (computerChoice === choices[0]) {
            return "Win";
        } else {
            return "Lose";
        }
    } 
    if (playerChoice === choices[2]) {
        if (computerChoice === choices[0]) {
            return "Lose";
        } else {
            return "Win";
        }
    } 
    
}

function showScore(playerChoice) {
    if (round >= 5) {
        return
    }

    let results = "";
    const score = playRound(playerChoice, scoreDiv)

    if(score === "Win") {
        playerScore++;
    } 
    if(score === "Lose") {
        computerScore++;
    }
    round++;
    console.log(score)

    if (round >= 5) {
        console.log("Game ended.")
        console.log("player score:", playerScore)
        console.log("computer score:", computerScore)
        if(playerScore > computerScore) {
            results = "You won the game!";
        } else if(computerScore > playerScore) {
            results = "You lost the game!";
        } else if(computerScore == playerScore) {
            results = "Game ended in a draw.";
        }
    }

    headerRound.textContent = "Round: " + round;
    scoreDiv.innerHTML = "<p>Player score: " + playerScore + "</p>" + "<p>Computer score: " + computerScore + "</p>";

    headerScore.innerHTML = results;
}

container.appendChild(header);
container.appendChild(btnReset);
container.appendChild(scoreDiv);
container.appendChild(gameDiv);
gameDiv.appendChild(headerRound);
gameDiv.appendChild(btnRock);
gameDiv.appendChild(btnPaper);
gameDiv.appendChild(btnScissors);
gameDiv.appendChild(playerPick);
gameDiv.appendChild(computerPick);
gameDiv.appendChild(headerScore);


btnReset.addEventListener('click', () => {
    round = 0;
    playerScore = 0;
    computerScore = 0;
    scoreDiv.innerHTML = "<p>Player score: " + playerScore + "</p>" + "<p>Computer score: " + computerScore + "</p>";
    headerScore.innerHTML = "";
    headerRound.textContent = "Round: " + round;
    playerPick.textContent = "";
    computerPick.textContent = "";
});