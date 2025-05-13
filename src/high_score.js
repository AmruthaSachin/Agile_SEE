// high_score.js
let currentScore = 0; // Declare currentScore at a module level

// Function to start the game and reset the score
function startGame() {
    currentScore = 0; // Reset score at the start of the game
    // Other game start logic here
}

// Function to increase the score
function increaseScore(points) {
    currentScore += points;
}

// Function to get the current score
function getCurrentScore() {
    return currentScore; // Return the current score
}

// Function to end the game and update the high score
function endGame() {
    let currentHighScore = localStorage.getItem('highScore');
    
    // Get the current score
    const score = getCurrentScore(); // Now this will work because getCurrentScore() returns currentScore
    
    if (!currentHighScore || score > currentHighScore) {
        localStorage.setItem('highScore', score);
    }
}

module.exports = { startGame, increaseScore, endGame, getCurrentScore };
