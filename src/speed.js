let currentSpeed = 100;  // Set the initial speed

// Function to reset speed when the game starts
export function resetSpeed() {
    currentSpeed = 100;  // Reset to initial value
    return currentSpeed;
}

// Function to increase speed when the snake eats food
export function increaseSpeed(speed, factor) {
    currentSpeed = speed * factor;  // Increase speed by the given factor
    return currentSpeed;
}

// Export the initial speed variable
export const initialSpeed = 100;
