// NOTE: JSON.parse() takes in a string and turns it into an object         =>questions = JSON.parser(questions)
// NOTE: JSON.stringify() takes in an object and turns it into a string     =>  questions = JSON.stringify(questions)
// NOTE: Push a key/value pair into localStorage with setItem()             =>  localStorage.setItem("questions", questions) / MUST BE A STRING

var highScores  = document.getElementById("highScores");
var timeClock = document.getElementById("timeClock");
var startButton = document.getElementById("startButton");
var container = document.getElementById("container");
var answerOptions = document.getElementById("answerOptions");


// Allow user to select an answer and store the value of their response to localStorage in a boolean (eg. isCorrect or isIncorrect)


// If answer is incorrect, decrement the timer by 10 seconds
function isIncorrect() {

}

function CorrectAnswer(val) {
  var answer = " ";

  switch(val) {
    case (questions.q1):
      answer = answers.q1answer;
      break;
    case (questions.q2):
      answer = answers.q2answer;
      break;
    case (questions.q3):
      answer = answers.q3answer;
      break;
    case (questions.q4):
      answer = answers.q4answer;
      break;
    case (questions.q5):
      answer = answers.q5answer;
      break;
  }
  return answer;
}

// Show current question on HTML page
function showQuestion1() {
  var currentQuestion = questions.q1;
  console.log("Question 1: " + currentQuestion);

  if (currentQuestion == questions.q1) {
    answerOptions = choices.q1choices;
    correctAnswer = CorrectAnswer(questions.q1);
    console.log(correctAnswer);
    document.querySelector("#container").textContent = currentQuestion;   
    currentQuestion = questions.q2;   // Show the second question
    showQuestion2();
  } 
    function showQuestion2() {
    console.log("Question 2: " + currentQuestion);
    answerOptions = choices.q2choices;
    correctAnswer = CorrectAnswer(questions.q2);
    console.log(correctAnswer);
    //document.querySelector("#container").textContent = currentQuestion;
    currentQuestion = questions.q3;
    showQuestion3();
  }
  function showQuestion3() {
    console.log("Question 3: " + currentQuestion);
    answerOptions = choices.q3choices;
    correctAnswer = CorrectAnswer(questions.q3);
    console.log(correctAnswer);
    currentQuestion = questions.q4;
    showQuestion4();
  }
  function showQuestion4() {
    console.log("Question 4: " + currentQuestion);  
    answerOptions = choices.q4choices;
    correctAnswer = CorrectAnswer(questions.q4);
    console.log(correctAnswer);
    currentQuestion = questions.q5;
    showQuestion5();
  }
  function showQuestion5() {
    console.log("Question 5: " + currentQuestion);
    answerOptions = choices.q5choices;
    correctAnswer = CorrectAnswer(questions.q5);
    console.log(correctAnswer);
  }
}

startButton.addEventListener("click", function() {
    // Start Timer
    startTimer();
    // Show first question and answer options
    showQuestion1();
})

var secondsLeft = 60;

function startTimer() {
  //console.log("The timer is starting");
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeClock.textContent = secondsLeft + " seconds left to complete the quiz.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      console.log("Quiz Over");
    }
  }, 1000);
}

//create an object of question
var questions = {
  q1: "Is JavaScript the same as Java?",
  q2: "Commonly used data types do not include?",
  q3: "Inside which HTML element do we put the JavaScript?",
  q4: "Where is the correct place to insert a JavaScript?",
  q5: "What is the correct syntax for referring to an external script called xxx.js?",
}

//create an object of answer choices
var choices = {
  q1choices: ["Yes", "No"],
  q2choices: ["Strings", "Booleans", "Arrays", "Alerts"],
  q3choices: ["<javascript>", "<script>", "<js>", "<scripting>"],
  q4choices: ["Both the <head> section and the <body> section are correct", "The <head> section", "The <body section>"],
  q5choices: ["<script name=\"xxx.js\">", "<script href=\"xxx.js\">", "<script src=\"xxx.js\">"],
}

// create an object of answers
var answers = {
  q1answer: "No",
  q2answer: "Alerts",
  q3answer: "<script>",
  q4answer: "Both the <head> section and the <body> section are correct",
  q5answer: "<script src=\"xxx.js\">",
}

