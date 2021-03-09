
var timeClock = document.getElementById("timeClock");
var startBtn = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answerButtons");

let shuffledQuestions, currentQuestionIndex;


function startQuiz() {
   console.log("The quiz is starting"); 
   startBtn.classList.add('hidden');
   shuffledQuestions = questions.sort(() => Math.random() - .5);
   currentQuestionIndex = 0;
   questionContainerElement.classList.remove('hidden');
   setNextQuestion();
}


function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}


function showQuestion(question) {
    questionElement.innerHTML = questions[currentQuestionIndex].question;
}

function selectAnswer() {

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
            { text: 'yes', correct: false},                     //this is questions[0].answers[0] -------  questions[0].answers[0].correct     > false    
            { text:'no', correct: true}                        // this is questions[0].answers[1] ------  questions[0].answers[1].correct      > true
        ]
    }
]
