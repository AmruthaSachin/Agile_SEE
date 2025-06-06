// tests/food.test.js

import { generateFood } from '../src/foodGeneration.js';

const canvas = { width: 480, height: 480 };  
const gridSize = 10;  

describe("generateFood", () => {
    
    test("should generate food within canvas boundaries", () => {
        const food = generateFood(canvas, gridSize, []);
        
        // Check that the food's x and y coordinates are within the canvas
        expect(food.x).toBeGreaterThanOrEqual(0);
        expect(food.x).toBeLessThan(canvas.width);
        expect(food.y).toBeGreaterThanOrEqual(0);
        expect(food.y).toBeLessThan(canvas.height);
    });

    test("should generate food at multiple places in the grid", () => {
        const food = generateFood(canvas, gridSize, []);
        
        // Check that the food's x and y coordinates are aligned to the grid size
        expect(food.x % gridSize).toBe(0);
        expect(food.y % gridSize).toBe(0);
    });

    test("should not generate food on the snake's body", () => {
        
        const snakeBody = [
            { x: 50, y: 50 },
            { x: 60, y: 50 },
            { x: 70, y: 50 },
        ];

        const food = generateFood(canvas, gridSize, snakeBody);
        
        // Ensure the food's position is not on any part of the snake's body
        snakeBody.forEach(part => {
            expect(food.x).not.toBe(part.x);
            expect(food.y).not.toBe(part.y);
        });
    });
});
