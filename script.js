let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, target) {
  humanDifference = Math.abs(target - humanGuess);
  computerDifference = Math.abs(target - computerGuess);
  return humanDifference <= computerDifference;
}

function updateScore(winner) {
  winner === 'human' ? humanScore++ : computerScore++;
}

function advanceRound() {
  currentRoundNumber++;
}
