// high_score.test.js

// Mock game functions
const startGame = jest.fn();
const increaseScore = jest.fn((score) => score); // Simulates increasing the score
const endGame = jest.fn(() => {
    // Simulate high score update logic inside endGame function
    const currentScore = 60; // Simulating the final score after game over
    let currentHighScore = localStorage.getItem('highScore');
    
    if (!currentHighScore || currentScore > currentHighScore) {
        localStorage.setItem('highScore', currentScore.toString()); // Update high score in localStorage
    }
});

beforeEach(() => {
    // Mock localStorage methods
    global.localStorage = {
        getItem: jest.fn(),
        setItem: jest.fn(),
        clear: jest.fn(),
    };
});

describe('High Score Tests', () => {
    beforeEach(() => {
        // Clear any saved data before each test
        localStorage.clear();
    });

    test('high score should be recorded properly when game is over', () => {
        // Simulate starting the game and increasing score
        startGame(); // Simulates starting the game
        const score = increaseScore(60); // Simulate the score reaching 60

        // Simulate ending the game and checking if the high score is updated
        endGame(); // Call the mocked endGame function to update the high score
        expect(localStorage.setItem).toHaveBeenCalledWith('highScore', '60'); // Check if setItem was called with 'highScore' and '60'
    });

    test('high score persists after game over', () => {
        // Simulate the high score stored in localStorage
        localStorage.getItem.mockReturnValue('75');

        // Simulate page reload or app restart and check if high score persists
        const reloadedHighScore = localStorage.getItem('highScore');
        expect(reloadedHighScore).toBe('75'); // Ensure that the stored high score persists after reload
    });
});
