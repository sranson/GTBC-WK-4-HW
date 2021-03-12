// DOM ELEMENTS
//=================================================================================
  var container = document.getElementById("container");
  var instructionsDiv = document.getElementById("instructionsDiv");
  var timeClock = document.getElementById("timeClock");
  var startBtn = document.getElementById("start-btn");
  var questionContainerElement = document.getElementById("question-container");
  var questionElement = document.getElementById("question");
  var answerButtonsElement = document.getElementById("answer-buttons");
  var controls = document.getElementById("controls");
  var results = document.getElementById("results");
  var finalScore = document.getElementById("finalScore");
  var userInitials = document.getElementById("userInitials");
  var remainingTime = document.getElementById("remainingTime");
  var notification = document.getElementById("notification");
  var tryAgain = document.getElementById("tryAgain");
//==================================================================================

results.classList.add('hidden');

// QUIZ QUESTIONS AND ANSWERS
//====================================================================================
var questions = [                                              
  {
      question: "Is JavaScript the same as Java?",            
      answers: [                                            
          { text: 'Yes', correct: false},                  
          { text:'No', correct: true}          
      ]
  },
  {
    question: "Commonly used data types do not include?",
    answers: [
      { text: "Strings", correct: false},
      { text: "Booleans", correct: false},
      { text: "Arrays", correct: false},
      { text: "Alerts", correct: true}                      
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
      { text: "<script name=\"xxx.js\">", correct: false},
      { text: "<script href=\"xxx.js\">", correct: false},
      { text: "<script src=\"xxx.js\">", correct: true}
    ]
  }, 
  {
    question: "What will the code return? Boolean(3 < 7)",    
    answers: [
      { text: "true", correct: true},
      { text: "false", correct: false},
      { text: "NaN", correct: false},
      { text: "SyntaxError", correct: false}
    ]
  },
  {
    question: "How do you write \"Hello World\" in an alert box?",                              
    answers: [
      { text: "alertBox(\"Hello World\")", correct: false},
      { text: "msg(\"Hello World\")", correct: false},
      { text: "msgBox(\"Hello World\")", correct: false},
      { text: "alert(\"Hello World\")", correct: true}
    ]
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      { text: "function myFunction()", correct: true},
      { text: "function = myFunction()", correct: false},
      { text: "function:myFunction()", correct: false}
    ]
  },
  {
    question: "How do you call a function named \"myFunction\"?",
    answers: [
      { text: "myFunction()", correct: true},
      { text: "call function myFunction()", correct: false},
      { text: "call myFunction()", correct: false}
    ]
  },
  {
    question:"How does a WHILE loop start?",
    answers: [
      { text: "while (i<=10)", correct: true},
      { text: "while i = 1 to 10", correct: false},
      { text: "while (i <= 10; i++)", correct: false}
    ]
  }
]
//====================================================================================


// OTHER VARIABLES
//===================================================================================
  var secondsLeft = 60;  
  var ShowQuestions;
  var currentQuestionIndex;
  var questionsAttempted = 0;
  var totalCorrect = 0;
  var totalQuestions = questions.length;
  var initials;
//===================================================================================



//EVENT LISTENERS
//===================================================================================
  startBtn.addEventListener("click", function() {
    startQuiz();
    startTimer();
  })

  tryAgain.addEventListener("click", function() {
    location.reload();
  })
//===================================================================================


//FUNCTIONS
//===================================================================================
  function startQuiz() { 
    startBtn.classList.add('hidden');
    instructionsDiv.classList.add('hidden');
    ShowQuestions = questions
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hidden');
    setNextQuestion();
  }


  function setNextQuestion() {
    resetState();
    showQuestion(ShowQuestions[currentQuestionIndex]);
  }

  // clear content in buttons
  function resetState() {
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }


  function showQuestion() {
    if (secondsLeft !== 0 && questionsAttempted !== totalQuestions) {
      questionElement.innerHTML = questions[currentQuestionIndex].question;
      answerChoices = questions[currentQuestionIndex].answers
      // Loop through the answers array for the current question
        for (i=0; i < answerChoices.length; i++) {                     
          button = document.createElement('button')
          button.innerText = answerChoices[i].text                             
          button.classList.add('btn')
          if (answerChoices[i].correct) {
            button.dataset.correct = answerChoices[i].correct;
          }
          button.addEventListener('click', selectAnswer)
          answerButtonsElement.appendChild(button);
        }
    } else {
      hideBoxContent()
    }
  }


  function selectAnswer(e) {
    questionsAttempted++;
    selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    if (correct) {
      currentQuestionIndex++;
      totalCorrect++;
      setNextQuestion();
      // SHOW ON HTML PAGE
      notification.textContent = "Correct!"
      notification.classList.remove('hidden');
    } else {
      // SHOW ON HTML PAGE
      notification.textContent = "Incorrect!"
      notification.classList.remove('hidden');
      currentQuestionIndex++;
      secondsLeft = secondsLeft - 10;  
      setNextQuestion();
    }
  }


  function startTimer() {
    timerInterval = setInterval(function() {
      secondsLeft--;
      timeClock.textContent = secondsLeft + " seconds left to complete the quiz.";

      if (secondsLeft === 0 || questionsAttempted === totalQuestions) {
        console.log(secondsLeft);
        clearInterval(timerInterval);
        gameOver();
      }
    }, 1000);
  }


  function gameOver() {
      hideBoxContent()
      calculateScore(questionsAttempted, totalCorrect);
      getInitials();
  }


  function calculateScore(questionsAttempted, totalCorrect ) {
    score = (100 / questionsAttempted) * totalCorrect;
    pushToLocalStorage();
  }

  function getInitials() {
    initials = prompt("Time Up! Enter your initials to see your score!");
    pushToLocalStorage();
    showResults();
  }

  function pushToLocalStorage() {
    localStorage.setItem("FinalScore", score)
    localStorage.setItem("TimeRemaining", secondsLeft + " seconds left")
    localStorage.setItem("Initials", initials)
  }

  function showResults() {
    console.log("SHOWING RESULTS!");
    results.classList.remove('hidden');
    userInitials.textContent = "Initials: " + localStorage.Initials;
    finalScore.textContent = "Final Score: " + localStorage.FinalScore + "%";
    remainingTime.textContent = "Remaining Time: " + localStorage.TimeRemaining;
    tryAgain.classList.remove('hidden');
  }

function hideBoxContent() {
  $(timeClock).hide();
  $(questionElement).hide();
  $(notification).hide();
  $(answerButtonsElement).hide();
}

//===================================================================================


