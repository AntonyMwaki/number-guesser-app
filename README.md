# number-guesser-app
HTML Structure:

The HTML file defines the structure of the webpage, including the game title, round information, input for the user's guess, and buttons to submit the guess.
It includes a link to an external CSS file (styles.css) for styling.
CSS Styling:

The CSS file (styles.css) provides basic styling for the game elements to enhance visual appeal.
JavaScript Code:

The JavaScript file (script.js) contains all the game logic and functionality.
It declares variables (humanScore, computerScore, currentRoundNumber) to keep track of the game state.
The generateTarget() function generates a random target number between 0 and 9.
The compareGuesses() function determines the winner based on the closest guess to the target number.
The updateScore() function increases the score of the winner.
The advanceRound() function increments the round number.
The displayResults() function shows the results and updates the UI.
The compareGuess() function handles the user's guess, generates computer and target numbers, and triggers the game flow.
Event Handling:

The onclick attribute in the HTML button calls the compareGuess() function when the user submits a guess.
Testing:

The project can be tested by opening the index.html file in a web browser.
Users can input their guesses and see the game results and scores.
This script creates a simple Number Guesser game where the user competes against the computer. The game tracks scores, displays results, and advances to the next round. Feel free to run the code and explore how the game works!
