let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function validGuess(guess) {
  if (guess < 0 || guess > 9) {
    alert('Guess out of range!');
    return false;
  }
  return true;
}

function getAbsoluteDistance(guess, target) {
  return Math.abs(target - guess);
}

function compareGuesses(humanGuess, computerGuess, target) {
  if (!validGuess(humanGuess)) {
    return false;
  }
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
