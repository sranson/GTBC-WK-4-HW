// DOM ELEMENTS
//=================================================================================
  var container = document.getElementById("container");
  var instructionsDiv = document.getElementById("instructionsDiv");
  var timeClock = document.getElementById("timeClock");
  var startBtn = document.getElementById("start-btn");
  var questionContainerElement = document.getElementById("question-container");
  var questionElement = document.getElementById("question");
  var answerButtonsElement = document.getElementById("answer-buttons");
//==================================================================================


// QUIZ QUESTIONS AND ANSWERS
//====================================================================================
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
      { text: "Strings", correct: false},
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
      { text: "<script name=\"xxx.js\">", correct: false},
      { text: "<script href=\"xxx.js\">", correct: false},
      { text: "<script src=\"xxx.js\">", correct: true}
    ]
  }
]
//==============================================================================================================================




// OTHER VARIABLES
//===================================================================================
  var secondsLeft = 60;  
  var ShowQuestions;
  var currentQuestionIndex;
  var questionsAttempted = 0;
  var totalCorrect = 0;
  var totalQuestions = questions.length;
//===================================================================================



//EVENT LISTENERS
//===================================================================================
  startBtn.addEventListener("click", function() {
    startQuiz();
    startTimer();
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
          //console.log(answerChoices[i]);                                         // IMPORTANT! THIS CODE OUTPUTS EACH ANSWER INDIVIDUALLY
          button = document.createElement('button')
          button.innerText = answerChoices[i].text                             
          button.classList.add('btn')
          if (answerChoices[i].correct) {
            button.dataset.correct = answerChoices[i].correct;
          }
          button.addEventListener('click', selectAnswer)
          answerButtonsElement.appendChild(button);
        }
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
    } else {
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
        clearInterval(timerInterval);
        gameOver();
      }
    }, 1000);
  }


  function gameOver() {
      calculateScore(questionsAttempted, totalCorrect);
      showResults();
  }


  function calculateScore(questionsAttempted, totalCorrect ) {
    score = (100 / questionsAttempted) * totalCorrect;
    pushToLocalStorage();
  }

  function showResults() {
    questionContainerElement.classList.add('hidden');
    var username = prompt("Enter your username to see your score!");
    localStorage.setItem("Username", username);
  }

  function pushToLocalStorage() {
    localStorage.setItem("Final Score", score)
    localStorage.setItem("Time Remaining", secondsLeft + " seconds left")
  }


//===================================================================================

// To-Do Once the game is over:
//  1. Prompt the user to provide their initials
//      "Enter your initials to see your score"   => save the username in localStorage
//  2. Show the username, the score, and the time remaining