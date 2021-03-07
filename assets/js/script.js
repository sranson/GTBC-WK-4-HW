// NOTE: JSON.parse() takes in a string and turns it into an object
// NOTE: JSON.stringify() takes in an object and turns it into a string     =>  questionString = JSON.stringify(questions)
// NOTE: Push a key/value pair into localStorage with setItem()             =>  localStorage.setItem("questions", questions)

var highScores  = document.getElementById("highScores");
var timeClock = document.getElementById("timeClock");
var startButton = document.getElementById("startButton");
var container = document.getElementById("container");


// Show current question on HTML page
function showQuestion() {
  var currentQuestion = questions.q1;
  document.querySelector("#container").textContent = currentQuestion;
}

  //if (answer !== null) {
    //for (const key in questions) {
      //var currentQuestion = `${key}: ${questions[key]}`;
      //console.log(currentQuestion);
   // }
  //}

// Show Answer Choices on HTML page
function showAnswerChoices() {
  var currentAnswerChoices = choices.q1choices;
  document.querySelector("#container").textContent = currentAnswerChoices;
}


// Allow user to select an answer and store the value of their response in a boolean (eg. isCorrect or isIncorrect)
function getAnswer() {

}


// If it is correct, show the next question and answer choices
function isCorrect() {

}


// If it is incorrect, decrement the timer by 10 seconds
function isIncorrect() {

}


startButton.addEventListener("click", function() {
    // Start Timer
    startTimer();
    // Show first question and answer options
    showQuestion();
})

var secondsLeft = 10;

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
  "q1": "Is JavaScript the same as Java?",
  "q2": "Commonly used data types do not include?",
  "q3": "Inside which HTML element do we put the JavaScript?",
  "q4": "Where is the correct place to insert a JavaScript?",
  "q5": "What is the correct syntax for referring to an external script called xxx.js?",
  "q6": "The external JavaScript file must contain the <script> tag.",
  "q7": "How do you write \"Hello World\" in an alert box?",
  "q8": "How do you create a function in JavaScript?",
  "q9": "How do you call a function named \"myFunction\"?",
  "q10": "How does a WHILE loop start?"
}

//create an object of answer choices
var choices = {
  q1choices: ["Yes", "No"],
  q2choices: ["Strings", "Booleans", "Arrays", "Alerts"],
  q3choices: ["<javascript>", "<script>", "<js>", "<scripting>"],
  q4choices: ["Both the <head> section and the <body> section are correct", "The <head> section", "The <body section>"],
  q5choices: ["<script name=\"xxx.js\">", "<script href=\"xxx.js\">", "<script src=\"xxx.js\">"],
  q6choices: ["True", "False"],
  q7choices: ["alert(\"Hello World\")", "alertBox(\"Hello World\")", "msg(\"Hello World\")", "msgBox(\"Hello World\")"],
  q8choices: ["function myFunction()", "function = myFunction()", "function:myFunction()"],
  q9choices: ["myFunction()", "function = myFunction", "Function:myFunction()"],
  q10choices: ["while (i <= 10)", "while i = 1 to 10", "while (i <= 10; i++)"]
}

// create an object of answers
var answers = {
  q1answer: "No",
  q2answer: "Alerts",
  q3answer: "<script>",
  q4answer: "Both the <head> section and the <body> section are correct",
  q5answer: "<script src=\"xxx.js\">",
  q6answer: "False",
  q7answer: "alert(\"Hello World\")",
  q8answer: "function myFunction()",
  q9answer: "myFunction()",
  q10answer: "while (i <= 10)"
}

