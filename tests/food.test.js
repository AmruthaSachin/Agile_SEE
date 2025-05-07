// tests/food.test.js

import { generateFood } from '../src/foodGeneration.js'; // Import the function directly

// Mock the canvas size and grid size
const canvas = { width: 400, height: 400 };  // Adjust as per your canvas size
const gridSize = 10;  // Adjust the grid size as needed

describe("generateFood", () => {
    
    test("should generate food within canvas boundaries", () => {
        const food = generateFood(canvas, gridSize);
        
        // Check that the food's x and y coordinates are within the canvas
        expect(food.x).toBeGreaterThanOrEqual(0);
        expect(food.x).toBeLessThan(canvas.width);
        expect(food.y).toBeGreaterThanOrEqual(0);
        expect(food.y).toBeLessThan(canvas.height);
    });

    test("should generate food at multiples of gridSize", () => {
        const food = generateFood(canvas, gridSize);
        
        // Check that the food's x and y coordinates are aligned to the grid size
        expect(food.x % gridSize).toBe(0);
        expect(food.y % gridSize).toBe(0);
    });
});
