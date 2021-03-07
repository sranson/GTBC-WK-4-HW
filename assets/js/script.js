var highScores  = document.getElementById("highScores");
var timeClock = document.getElementById("timeClock");
var startButton = document.getElementById("startButton");


var quizQuestions = [
{
  "Question1": "Is JavaScript the same as Java?",
  "Question1AnswerChoices": ["Yes", "No"]                                     // [1]
},
{
  "Question2": "Commonly used data types do not include?",
  "Question2AnswerChoices": ["Strings", "Booleans", "Arrays", "Alerts"]           // [3]
},
{
  "Question3": "Inside which HTML element do we put the JavaScript?",
  "Question3AnswerChoices": ["<javascript>", "<script>", "<js>", "<scripting>"]     // [1]
},
{
  "Question4": "Where is the correct place to insert a JavaScript?",
  "Question4AnswerChoices": ["Both the <head> section and the <body> section are correct", "The <head> section", "The <body section>"]  //[0]
},
{
  "Question5": "What is the correct syntax for referring to an external script called xxx.js?",
  "Question5AnswerChoices": ["<script name=\"xxx.js\">", "script href=\"xxx.js\"", "script src=\"xxx.js\""]         //[2]
},
{
  "Question6": "The external JavaScript file must contain the <script> tag.",
  "Question6AnswerChoices": ["True", "False"]                                   // [1]
},
{
  "Question7": "How do you write \"Hello World\" in an alert box?",
  "Question7AnswerChoices": ["alert(\"Hello World\")", "alertBox(\"Hello World\")", "msg(\"Hello World\")", "msgBox(\"Hello World\")"]    // [0]
},
{
  "Question8": "How do you create a function in JavaScript?",
  "Question8AnswerChoices": ["function myFunction()", "function = myFunction()", "function:myFunction()"]         // [0]
},
{
  "Question9": "How do you call a function named \"myFunction\"?",  
  "Question9AnswerChoices": ["function myFunction()", "function = myFunction", "Function:myFunction()"]           // [0]
},
{
  "Question10": "How does a WHILE loop start?",
  "Question10AnswerChoices": ["while (i <= 10)", "while i = 1 to 10", "while (i <= 10; i++)"]                   // [0]
}
];


// Create and store the quiz questions and the correct answer in an ARRAY OF OBJECTS in localStorage (Key/Value Pairs)
// The show other answer options in the HTML
// BUT since the correct answer is stored in the object, if the user DOES NOT click the correct answer (answer that matches the value) then it is incorrect and the timer decrements by 10 seconds


startButton.addEventListener("click", function() {
    console.log("The start button was clicked");
    // Start Timer
    startTimer();

    // Show first question and answer options
    showQuestions();
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



function showQuestions() {
  console.log("Showing first question");
}

//EXAMPLE CODE
/*
var student = document.getElementById("student-names");
var grade = document.getElementById("grades");
var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");
var savedName = document.getElementById("saved-name");

saveButton.addEventListener("click", function(event) {
event.preventDefault();

var studentGrade = {
  student: student.value,
  grade: grade.value,
  comment: comment.value.trim()
};

localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
renderMessage();

});

function renderMessage() {
  var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
  if (lastGrade !== null) {
    document.querySelector(".message").textContent = lastGrade.student + 
    " received a/an " + lastGrade.grade
  }
}

*/