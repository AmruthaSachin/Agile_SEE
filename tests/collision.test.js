// tests/collision.test.js
import { checkCollision } from '../src/collision.js';

describe("checkCollision", () => {

    test("should return true if snake head collides with boundaries", () => {
        const canvasWidth = 480;
        const canvasHeight = 480;

        expect(checkCollision([{ x: -10, y: 200 }], canvasWidth, canvasHeight)).toBe(true);
        expect(checkCollision([{ x: 490, y: 200 }], canvasWidth, canvasHeight)).toBe(true);
        expect(checkCollision([{ x: 200, y: -10 }], canvasWidth, canvasHeight)).toBe(true);
        expect(checkCollision([{ x: 200, y: 490 }], canvasWidth, canvasHeight)).toBe(true);
    });

    test("should return true if snake head collides with its body", () => {
        const snake = [
            { x: 200, y: 200 },
            { x: 200, y: 200 },
            { x: 300, y: 200 }
        ];
        expect(checkCollision(snake, 400, 400)).toBe(true);
    });

    test("should return false if snake head is free from collision", () => {
        const snake = [
            { x: 100, y: 100 },
            { x: 90, y: 100 },
            { x: 80, y: 100 }
        ];
        expect(checkCollision(snake, 400, 400)).toBe(false);
    });
});
