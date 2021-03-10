
var timeClock = document.getElementById("timeClock");
var startBtn = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");

var ShowQuestions, currentQuestionIndex;

var counter = 0;

function startQuiz() { 
   startBtn.classList.add('hidden');
   ShowQuestions = questions
   currentQuestionIndex = 0;
   questionContainerElement.classList.remove('hidden');
   setNextQuestion();
}


function setNextQuestion() {
    showQuestion(ShowQuestions[currentQuestionIndex]);
}


function showQuestion(question) {
  questionElement.innerHTML = questions[currentQuestionIndex].question;

    
  // Loop through the answer array for the current question
   answerChoices = question.answers
   answerChoices.forEach(function() {
   console.log(answerChoices[counter]);                                         // IMPORTANT! THIS CODE OUTPUTS EACH ANSWER INDIVIDUALLY
   var button = document.createElement('button')
   button.innerText = answerChoices[counter].text
   button.classList.add('btn')
   button.addEventListener('click', selectAnswer)
   answerButtonsElement.appendChild(button);
   addOne();
 }); 
}


function addOne() {
  counter += 1;
  return counter;
}



function selectAnswer(e) {

}


// Event Listener for Start Button
startBtn.addEventListener("click", function() {
    startQuiz();
    startTimer();
})


// Timer
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


var questions = [                                               // this is an object - I thought it would be an array
    {
        question: "Is JavaScript the same as Java?",             //this is questions[0].question
        answers: [                                              //this is questions[0].answers
            { text: 'Yes', correct: false},                     //this is questions[0].answers[0] -------  questions[0].answers[0].correct     > false    
            { text:'No', correct: true}                        // this is questions[0].answers[1] ------  questions[0].answers[1].correct      > true
        ]
    },
    {
      question: "Commonly used data types do not include?",
      answers: [
        { text: "strings", correct: false},
        { text: "Booleans", correct: false},
        { text: "Arrays", correct: false},
        { text: "Alerts", correct: true}                      // questions[1].answers[3].correct > true
      ]
    },
    {
      question: "Inside which HTML element do we put the JavaScript?",
      answers: [
        { text: "<javascript>", correct: false},
        { text: "<script>", correct: true},
        { text: "<js>", correct: false},
        { text: "<scripting>", correct: false }
      ]
    },
    {
      question: "Where is the correct place to insert a JavaScript?",
      answers: [
        { text: "Both the <head> section and the <body> section are correct", correct: true},
        { text: "The <head> section", correct: false},
        { text: "The <body section", correct: false},
      ]
    },
    {
      question: "What is the correct syntax for referring to an external script called xxx.js?",
      answers: [
        { text: "<script name=\"xxx.js\">", correct: true},
        { text: "<script href=\"xxx.js\">", correct: false},
        { text: "<script src=\"xxx.js\">", correct: false}
      ]
    }
]
