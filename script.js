const min = 1;
const max = 50;
let secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let attempts = 0;

const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const message = document.getElementById('message');

function checkGuess() {
    const userGuess = parseInt(guessInput.value, 10);
    attempts++;

    if (isNaN(userGuess) || userGuess < min || userGuess > max) {
        message.textContent = `Please enter a number between ${min} and ${max}.`;
        message.className = 'error-message';
        return;
    }

    if (userGuess === secretNumber) {
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        message.className = 'success-message';
        guessButton.disabled = true;
    } else if (userGuess < secretNumber) {
        message.textContent = 'Too low! Try again.';
        message.className = 'error-message';
    } else {
        message.textContent = 'Too high! Try again.';
        message.className = 'error-message';
    }
}

guessButton.addEventListener('click', checkGuess);

guessInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkGuess();
    }
});
