 
        const choices = ['rock', 'paper', 'scissors']
        let score = {player: 0, cpu: 0 , rounds: 1};    

/// Computer Selection        
            function computerPlay() {
            let getRandom = Math.floor(Math.random() * choices.length)
            return choices[getRandom]
        }

/// Single Round
   
    /// A Single Round is Played
        function playRound(playerSelection) {
                keepScore();
                player = playerSelection;
                computer = computerPlay();
            if (player === computer) {
                    score.rounds += 1;
                    tie();                  
            } else if ((player === 'rock') && (computer === 'scissors') ||
                        (player === 'paper') && (computer === 'rock') ||
                        (player === 'scissors') && (computer === 'paper')) 
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

//Scorekeeping functions   
    function keepScore() {
        scoreContent.textContent = ("Round: " + score.rounds + " Human: " + score.player + "; Machine: " + score.cpu)
        scoretop.appendChild(scoreContent);
        if (score.player === 5 || score.cpu === 5) {
                endGame();  
            }
        }

    function reset() {
        score.player = 0;
        score.cpu = 0;
        score.rounds = 0;
        scoreContent.textContent = ("Round: " + score.rounds + " Human: " + score.player + "; Machine: " + score.cpu)
        
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

// Listening for some buttons   
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
        if (button.id == "newGame") {
            reset();
        } else {
        playRound(button.id);    
        }})
    })

//Talking to HTML containers
    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('content');

    const scoretop = document.querySelector('#scoretop');
    const scoreContent = document.createElement('div');
    scoreContent.classList.add('scoreContent');

//Outcome functions    
    function tie() {
        content.textContent = ("Tie! Double " + player + "s! Go again!");
        container.appendChild(content);
        }

    function winner() {
        content.textContent = ("You win! " + player + " beats " + computer + "!");
        container.appendChild(content);
        }

    function loser() {
        content.textContent = ("You Lose! " + computer + " beats " + player + "!");
        container.appendChild(content);
        }


