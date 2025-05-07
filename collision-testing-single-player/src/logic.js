// src/logic.js
import { checkCollision } from './collision.js';

export function gameLoop(snake, direction, canvasWidth, canvasHeight, food, score, highScore, speed) {
    let newHead = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    if (checkCollision(snake, canvasWidth, canvasHeight)) {
        return { gameOver: true, score, highScore };
    }

    snake.unshift(newHead);

    if (newHead.x === food.x && newHead.y === food.y) {
        score++;
        if (score > highScore) {
            highScore = score;
        }
        food = generateFood(canvasWidth, canvasHeight);
        speed *= 0.95;
    } else {
        snake.pop();
    }

    return { snake, food, score, highScore, speed, gameOver: false };
}

export function generateFood(canvasWidth, canvasHeight) {
    return {
        x: Math.floor(Math.random() * (canvasWidth / 20)) * 20,
        y: Math.floor(Math.random() * (canvasHeight / 20)) * 20
    };
}
