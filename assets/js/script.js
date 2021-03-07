var highScores  = document.getElementById("highScores");
var timeClock = document.getElementById("timeClock");
var startButton = document.getElementById("startButton");
var container = document.getElementById("container");






// If the user DOES NOT click the correct answer (answer that matches the value) then it is incorrect and the timer decrements by 10 seconds


function showQuestion() {
  ques = (quizQuestions[0].question, JSON.stringify(quizQuestions[0].question));  
  choices = (quizQuestions[0].choices, JSON.stringify(quizQuestions[0].choices)); 
  console.log(typeof choices);         
  document.querySelector("#container").textContent = ques;              //Show question on html screen
  
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



var quizQuestions = [
  {
    "qid": 1,
    "question": "Is JavaScript the same as Java?",
    "choices": ["Yes", "No"],
    "answer": "No"                                    
  },
  {
    "qid": 2,
    "question": "Commonly used data types do not include?",
    "choices": ["Strings", "Booleans", "Arrays", "Alerts"],          
    "answer": "Alerts"
  },
  {
    "qid": 3,
    "question": "Inside which HTML element do we put the JavaScript?",
    "choices": ["<javascript>", "<script>", "<js>", "<scripting>"],     // [1]
    "answer": "<javascript>"
  },
  {
    "qid": 4,
    "question": "Where is the correct place to insert a JavaScript?",
    "choices": ["Both the <head> section and the <body> section are correct", "The <head> section", "The <body section>"],  //[0]
    "answer": "Both the <head> section and the <body> section are correct"
  },
  {
    "qid": 5,
    "question": "What is the correct syntax for referring to an external script called xxx.js?",
    "choices": ["<script name=\"xxx.js\">", "<script href=\"xxx.js\">", "<script src=\"xxx.js\">"],         //[2]
    "answer": "<script src=\"xxx.js\">"
  },
  {
    "qid": 6,
    "question": "The external JavaScript file must contain the <script> tag.",
    "choices": ["True", "False"],                                   // [1]
    "answer": "True"
  },
  {
    "qid": 7,
    "question": "How do you write \"Hello World\" in an alert box?",
    "choices": ["alert(\"Hello World\")", "alertBox(\"Hello World\")", "msg(\"Hello World\")", "msgBox(\"Hello World\")"],    // [0]
    "answer": "alert(\"Hello World\")"
  },
  {
    "qid": 8,
    "question": "How do you create a function in JavaScript?",
    "choices": ["function myFunction()", "function = myFunction()", "function:myFunction()"],         // [0]
    "answer": "function myFunction()"
  },
  {
    "qid": 9,
    "question": "How do you call a function named \"myFunction\"?",  
    "choices": ["myFunction()", "function = myFunction", "Function:myFunction()"],           // [0]
    "answer": "myFunction()"
  },
  {
    "qid": 10,
    "question": "How does a WHILE loop start?",
    "choices": ["while (i <= 10)", "while i = 1 to 10", "while (i <= 10; i++)"],                  // [0]
    "answer": "while (i <= 10)"
  }
  ];