let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.round(Math.random()*10)
}

function compareGuesses(humanGuess,computerGuess,targetNumber){
    const userDifference = Math.abs(targetNumber - userGuess);
  const computerDifference = Math.abs(targetNumber - computerGuess);

  return userDifference <= computerDifference;
}

function updateScore(winner){
    if(winner==='human'){
        humanScore++;
    }
    else if(winner==='computer'){
        computerScore++;
    }

}

function advanceRound() {
    currentRoundNumber++;
  }

  function displayResults(winner, targetNumber) {
    const message = winner === 'human' ? 'You win!' : 'Computer wins!';
    document.getElementById('message').innerHTML = `${message} The target number was ${targetNumber}.`;
  
    document.getElementById('human-score').textContent = humanScore;
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById('round-number').textContent = currentRoundNumber;
  }

  
  function compareGuess() {
    const userGuess = document.getElementById('human-guess').value;
    if (userGuess < 0 || userGuess > 9) {
      alert('Please enter a number between 0 and 9.');
      return;
    }
  
    const computerGuess = generateTarget();
    const targetNumber = generateTarget();
  
    const humanWins = compareGuesses(userGuess, computerGuess, targetNumber);
    updateScore(humanWins ? 'human' : 'computer');
    displayResults(humanWins ? 'human' : 'computer', targetNumber);
  
    advanceRound();
  }