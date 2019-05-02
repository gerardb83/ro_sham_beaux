const gameMoves = document.querySelectorAll(".move-box input");
const roundText = document.querySelector('#round');
const playerSelectionText = document.querySelector('#player-selection');
const computerSelectionText = document.querySelector('#computer-selection');
const resultsText = document.querySelector('#results-container');
const playerScoreText = document.querySelector('#player-score .score-box');
const cpuScoreText = document.querySelector('#cpu-score .score-box');

const choices = ['rock', 'paper', 'scissors']
let score = {player: 0, cpu: 0 , rounds: 1};   

gameMoves.forEach( move => move.addEventListener('click', event => {
   let playerSelection = event.target.name;
   let computerSelection = computerPlay();
   playRound(playerSelection, computerSelection); 
})
);

function computerPlay() {
    let getRandom = Math.floor(Math.random() * choices.length)
    return choices[getRandom]
}

function playRound(playerSelection, computerSelection) {
   
if (playerSelection === computerSelection) {
        score.rounds += 1;
        tie();                  
} else if ((playerSelection === 'rock') && (computerSelection === 'scissors') ||
            (playerSelection === 'paper') && (computerSelection === 'rock') ||
            (playerSelection === 'scissors') && (computerSelection === 'paper')) 
        { 
        score.player += 1;
        score.rounds += 1;
        winner();
} else  {
        score.cpu += 1;
        score.rounds += 1;
        loser();
        }
}

function tie() {
    content.textContent = ("Tie! Double " + playerSelection + "s! Go again!");
    container.appendChild(content);
    }

function winner() {
    content.textContent = ("You win! " + playerSelection + " beats " + computerSelection + "!");
    container.appendChild(content);
    }

function loser() {
    content.textContent = ("You Lose! " + computerSelection + " beats " + playerSelection + "!");
    container.appendChild(content);
    }

    function endGame() {
        container.textContent = "Play again?"
            if (score.player === 5) {
                alert("YOU WIN!!! " + score.player + " to " + score.cpu + "!!")
                reset();
            } else {
                alert("LOSER! " + score.cpu + " to " + score.player + "!!")
                reset();
            }                       
        }    

function reset() {
    score.player = 0;
    score.cpu = 0;
    score.rounds = 0;
    roundText.textContent = `round: ${score.rounds}`;
    playerScoreText.textContent = `${score.player}`;
    computerScoreText.textContent = `${score.cpu}`;
    resultsText.textContent = ``;
    playerSelectionText.textContent = ``;
    computerSelectionText.textContent = ``;
}
