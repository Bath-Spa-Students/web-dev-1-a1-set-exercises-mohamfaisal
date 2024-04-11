const colors = [
    { r: 255, g: 0, b: 0 },
    { r: 0, g: 255, b: 0 },
    { r: 0, g: 0, b: 255 },
    { r: 255, g: 255, b: 0 },
    { r: 255, g: 0, b: 255 },
    { r: 0, g: 255, b: 255 }
];

let lives = 3;
let score = 0; 

const rgbDisplay = document.getElementById('rgb');
const optionsDiv = document.getElementById('options');
const feedbackDiv = document.getElementById('feedback');
const restartBtn = document.getElementById('restart-btn');
function generateRGB() {
    const color = colors[Math.floor(Math.random() * colors.length)];
    return `RGB(${color.r}, ${color.g}, ${color.b})`;
}

function generateOptions(correctColor) {
    const options = [];
    options.push(correctColor);
    while (options.length < 4) {
        const randomColor = generateRGB();
        if (!options.includes(randomColor)) {
            options.push(randomColor);
        }
    }
    return options;
}


function updateGame() {
    const correctColor = generateRGB();
    const options = generateOptions(correctColor);
    
    rgbDisplay.textContent = correctColor;
    
    optionsDiv.innerHTML = '';
    options.forEach(color => {
        const option = document.createElement('div');
        option.classList.add('option');
        option.style.backgroundColor = color;
        option.addEventListener('click', () => {
            if (color === correctColor) {
                score++;
                feedbackDiv.textContent = 'Correct!';
            } else {
                lives--;
                feedbackDiv.textContent = 'Incorrect!';
            }
            setTimeout(() => {
                feedbackDiv.textContent = '';
                if (lives > 0) {
                    updateGame();
                } else {
                    endGame();
                }
            }, 1000);
        });
        optionsDiv.appendChild(option);
    });
}

function endGame() {
    optionsDiv.innerHTML = '';
    feedbackDiv.textContent = `Game Over! Your score is: ${score}`;
    restartBtn.style.display = 'block';
}

restartBtn.addEventListener('click', () => {
    lives = 3;
    score = 0;
    restartBtn.style.display = 'none';
    updateGame();
});

updateGame();
