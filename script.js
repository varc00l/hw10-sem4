let count = 0;
const timer = setInterval(() => {
    count++;
    console.log(`Повідомлення номер ${count}`);
    
    if (count === 5) {
        clearInterval(timer);
        console.log('Інтервал зупинено.');
    }
}, 1000);

const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');

let box1Size = 50;
let box2Position = 100;
let box3Opacity = 1;

setInterval(() => {
    box1Size += 2;
    box1.style.width = box1Size + 'px';
    box1.style.height = box1Size + 'px';
    box2Position += 5;
    box2.style.left = box2Position + 'px';
    box3Opacity -= 0.05;
    box3.style.opacity = box3Opacity;
    
    if (box1Size > 150 || box2Position > window.innerWidth || box3Opacity <= 0) {
        clearInterval();
    }
}, 100);

const button = document.getElementById('button');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');

let score = 0;
let timeLeft = 10;

const timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Час: ${timeLeft}`;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        button.disabled = true; 
        alert(`Гра завершена! Ваші очки: ${score}`);
    }
}, 1000);

button.addEventListener('click', () => {
    if (timeLeft > 0) {
        score++;
        scoreDisplay.textContent = `Очки: ${score}`;
    }
});

const startButton = document.getElementById('startButton');
const timeInput = document.getElementById('timeInput');
const messageDisplay = document.getElementById('message');

startButton.addEventListener('click', () => {
    const timeInSeconds = parseInt(timeInput.value);

    if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
        alert('Будь ласка, введіть коректне значення часу.');
        return;
    }

    messageDisplay.textContent = `Відлік почався на ${timeInSeconds} секунд.`;

    setTimeout(() => {
        messageDisplay.textContent = 'Час вийшов!';
    }, timeInSeconds * 1000);
});