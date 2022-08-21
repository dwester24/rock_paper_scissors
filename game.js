// Global Variables
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
// Buttons
const rock = document.getElementById('rockBtn');
const paper = document.getElementById('paperBtn');
const scissors = document.getElementById('scissorsBtn');
const reset = document.getElementById('reset');
// HTML elements to update
const playerSc = document.getElementById('playerScore');
const computerSC = document.getElementById('computerScore');
const results = document.getElementById('results');


// Randomly get computer's choice
const getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

// Plays Single round of game
const playRound = (playerSelection) => {
    if (roundCount < 5) {
        roundCount += 1;
        let player = playerSelection.toLowerCase();
        let computer = getComputerChoice().toLowerCase();

        return checkRoundWinner(player, computer);
    } else {
        return checkGameWinner()
    }

}

// Helper function to check round winner
const checkRoundWinner = (player, computer) => {
    if (player === computer) {
        results.innerHTML = 'You tied! Try again!';
    } else if ((player === 'rock' && computer === 'scissors') ||
               (player === 'paper' && computer === 'rock') ||
               (player === 'scissors' && computer === 'paper')){

                playerScore ++;
                playerSc.innerHTML = `Player: ${playerScore}`;
                results.innerHTML = `Round result: You Win! ${player} beats ${computer}`;
    } else {
        computerScore ++;
        computerSC.innerHTML = `Computer: ${computerScore}`;
        results.innerHTML = `Round result: You Lose! ${computer} beats ${player}`;
    }
}

// Helper function to check game winner
const checkGameWinner = () => {
    if (playerScore > computerScore) {
        results.innerHTML = `You Win!`;
    } else if (playerScore < computerScore) {
        results.innerHTML = 'You Lose!';
    } else {
        results.innerHTML = 'You tied!';
    }
};

// Add Event listeners
rock.addEventListener('click', function() {
    playRound('rock');

});

paper.addEventListener('click', function() {
    playRound('paper');

});

scissors.addEventListener('click', function() {
    playRound('scissors');
})

reset.addEventListener('click', function() {
    // Reset UI
    results.innerHTML = 'Round result: ';
    playerSc.innerHTML = 'Player: 0';
    computerSC.innerHTML = 'Computer: 0';

    // Reset game variables
    roundCount = 0;
    playerScore = 0;
    computerScore = 0;
});
