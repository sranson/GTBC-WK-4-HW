
var timeClock = document.getElementById("timeClock");
var startBtn = document.getElementById("start-btn");


















// Event Listener for Start Button
startBtn.addEventListener("click", function() {
    startTimer();
})

var secondsLeft = 60;

// Timer
function startTimer() {
  console.log("The timer is starting");
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeClock.textContent = secondsLeft + " seconds left to complete the quiz.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      console.log("Quiz Over");
    }
  }, 1000);
}