import { resetSpeed, increaseSpeed, initialSpeed } from '../src/speed.js';  

describe('Speed logic', () => {
    test('should reset speed to initial value when game starts', () => {
        const result = resetSpeed();
        expect(result).toBe(initialSpeed);
    });

    test('should increase speed when snake eats food', () => {
        const initialSpeed = 100;  // initial speed of the snake
        const foodFactor = 1.1;    // factor by which speed increases after eating food
        const result = increaseSpeed(initialSpeed, foodFactor);
        expect(result).toBeCloseTo(110, 5);  
    });
});
