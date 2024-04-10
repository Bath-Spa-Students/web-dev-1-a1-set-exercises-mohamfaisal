const rgbValue = document.getElementById('rgb-value');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const result = document.getElementById('result');
const lives = document.getElementById('lives');
const resetBtn = document.getElementById('reset-btn');

let correctColour;
let numLives = 3;

function generateRandomColour() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

function generateOptions() {
    const options = [option1, option2, option3];
    options.forEach(option => {
        option.style.backgroundColor = generateRandomColour();
    });
    correctColour = options[Math.floor(Math.random() * 3)].style.backgroundColor;
}

function checkResult(colour) {
    if (colour === correctColour) {
        result.textContent = 'Correct!';
    } else {
        result.textContent = 'Incorrect!';
        numLives--;
        lives.textContent = `Lives: ${numLives}`;
        if (numLives === 0) {
            result.textContent = 'Game Over!';
            resetBtn.style.display = 'block';
        }
    }
}

option1.addEventListener('click', () => checkResult(option1.style.backgroundColor));
option2.addEventListener('click', () => checkResult(option2.style.backgroundColor));
option3.addEventListener('click', () => checkResult(option3.style.backgroundColor));

resetBtn.addEventListener('click', () => {
    numLives = 3;
    result.textContent = '';
    lives.textContent = `Lives: ${numLives}`;
    resetBtn.style.display = 'none';
    generateOptions();
});

generateOptions();