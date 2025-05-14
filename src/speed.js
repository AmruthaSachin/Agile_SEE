let currentSpeed = 100; 


export function resetSpeed() {
    currentSpeed = 100;  
    return currentSpeed;
}


export function increaseSpeed(speed, factor) {
    currentSpeed = speed * factor;  
    return currentSpeed;
}


export const initialSpeed = 100;
