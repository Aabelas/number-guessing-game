let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    let guess = Number(document.getElementById('guess').value);
    let result = document.getElementById('result');

    if (guess === randomNumber) {
        result.textContent = "🎉 Correct! You win!";
    } else if (guess < randomNumber) {
        result.textContent = "Too low! Try again.";
    } else {
        result.textContent = "Too high! Try again.";
    }
}
