// src/foodGeneration.js

export function generateFood(canvas, gridSize, snakeBody = []) {
    let food;
    
    do {
     
        food = {
            x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
            y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize,
        };
    } while (isFoodOnSnake(food, snakeBody));  // Ensure food doesn't overlap snake's body

    return food;
}

// Helper function to check if the food is on the snake's body
function isFoodOnSnake(food, snakeBody) {
    return snakeBody.some(part => part.x === food.x && part.y === food.y);
}
