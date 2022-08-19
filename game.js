// Global Variables
let playerScore = 0;
let computerScore = 0;

// Randomly get computer's choice
const getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

// Plays Single round of game
const playRound = (playerSelection, computerSelection) => {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    return checkRoundWinner(player, computer);

}

// Play the game for 5 rounds
const game = () => {
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt('Enter your selection:');
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    return checkGameWinner();

}


// Helper function to check round winner
const checkRoundWinner = (player, computer) => {
    if (player === computer) {
        return 'You tied!';
    } else if ((player === 'rock' && computer === 'scissors') ||
               (player === 'paper' && computer === 'rock') ||
               (player === 'scissors' && computer === 'paper')){

                playerScore ++;
                return `You Win! ${player} beats ${computer}`;
    } else {
        computerScore ++;
        return `You Lose! ${computer} beats ${player}`;
    }
}

// Helper function to check game winner
const checkGameWinner = () => {
    if (playerScore > computerScore) {
        return `You Win!`
    } else {
        return 'You Lose!'
    }
};

console.log(game());
