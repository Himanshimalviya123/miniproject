
let timerDisplay = document.getElementById('timer-display');
let startBtn = document.getElementById('start-btn');
let stopBtn = document.getElementById('stop-btn');
let resetBtn = document.getElementById('reset-btn');

let seconds = 0;
let minutes = 0;
let hours = 0;
let timerInterval = null;

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
  timerInterval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes === 60) {
      hours++;
      minutes = 0;
    }
    timerDisplay.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }, 1000);
}
function stopTimer() {
    clearInterval(timerInterval);
  }
  
  function resetTimer() {
    stopTimer();
    seconds = 0;
    minutes = 0;
    hours = 0;
    timerDisplay.textContent = '00:00:00';
  }
  
  function padZero(num) {
    return (num < 10 ? '0' : '') + num;
  }
  