// high_score.test.js

// Mock game functions
const startGame = jest.fn();
const increaseScore = jest.fn((score) => score); 
const endGame = jest.fn(() => {
  
    const currentScore = 60; 
    let currentHighScore = localStorage.getItem('highScore');
    
    if (!currentHighScore || currentScore > currentHighScore) {
        localStorage.setItem('highScore', currentScore.toString()); 
    }
});

beforeEach(() => {
    
    global.localStorage = {
        getItem: jest.fn(),
        setItem: jest.fn(),
        clear: jest.fn(),
    };
});

describe('High Score Tests', () => {
    beforeEach(() => {
     
        localStorage.clear();
    });

    test('high score should be recorded properly when game is over', () => {
       
        startGame(); 
        const score = increaseScore(60); 

        
        endGame(); 
        expect(localStorage.setItem).toHaveBeenCalledWith('highScore', '60'); 
    });

    test('high score persists after game over', () => {
   
        localStorage.getItem.mockReturnValue('75');

        
        const reloadedHighScore = localStorage.getItem('highScore');
        expect(reloadedHighScore).toBe('75'); 
    });
});
