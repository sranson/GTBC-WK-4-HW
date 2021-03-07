var highScores  = document.getElementById("highScores");
var timeClock = document.getElementById("timeClock");
var startButton = document.getElementById("startButton");




startButton.addEventListener("click", function() {
    console.log("The start button was clicked");
    // Start Timer
    // Show first question and answer options
    //
})



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