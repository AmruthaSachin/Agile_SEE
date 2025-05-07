// singleplayer.js

// Existing game logic...

export function generateFood(canvas, gridSize) {
    return {
        x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
        y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize
    };
}

// Other game functions...
