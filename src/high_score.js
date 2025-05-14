// high_score.js
let currentScore = 0; 

function startGame() {
    currentScore = 0; 
    
}


function increaseScore(points) {
    currentScore += points;
}


function getCurrentScore() {
    return currentScore; 
}


function endGame() {
    let currentHighScore = localStorage.getItem('highScore');
    
    
    const score = getCurrentScore(); 
    
    if (!currentHighScore || score > currentHighScore) {
        localStorage.setItem('highScore', score);
    }
}

module.exports = { startGame, increaseScore, endGame, getCurrentScore };
