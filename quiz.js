var qCycle = 1;            // variable for indexing questions
var correct = 3;           //variable that tells which answer choice is correct
var keepScore = {};

function startQuiz() {
  var reveal = document.querySelector(".ciao");
  reveal.setAttribute("style", "display: none");            //first 2 lines hide the start button & h1 tag 
  var change = document.getElementById("question");
  var tags = document.getElementsByClassName("ans");
  if (qCycle == 1) {                             
    change.textContent = "Which two attributes should every `<img>` element have?";

    tags[0].textContent = "A. `src` and `link`";
    tags[1].textContent = "B. `href` and `link`";                             //first if statement displays first question & initiates timer
    tags[2].textContent = "C. `src` and `alt`";
    tags[3].textContent = "D. `http` and `alt`";

    setTime();
  } else if (qCycle == 2) {
    change.textContent = "What two methods allow access to local storage?";

    correct = 4;
    tags[0].textContent = "A. place() and acquire()";              //other questions cycled thru with qCycle variable explained later
    tags[1].textContent = "B. set() and get()";
    tags[2].textContent = "C. actuate() and retrieve()";
    tags[3].textContent = "D. setItem() and getItem()";
  } else if (qCycle == 3) {
    change.textContent = "What is the difference between class and id?";

    correct = 1;
    tags[0].textContent = "A. All targets will be selected for with same class but only one specific target can be selected for with id ";
    tags[1].textContent = "B. in css, class is denoted as #class while id is denoted as .id";
    tags[2].textContent = "C. class is a type of node where as id is an HTML element";
    tags[3].textContent = "D. class makes content inside a particular tag immutable where as id defines the mutability of a tag";
  } else if (qCycle == 4) {
    change.textContent = "Which of these correctly defines a for loop function?";

    correct = 4;
    tags[0].textContent = "A. for(i < arc.length; i++; i=0) {} ";
    tags[1].textContent = "B. for(var i=0; i < arc.length; j++) {}";
    tags[2].textContent = "C. for(var i=0; i>2; i++) {}";
    tags[3].textContent = "D. for(var i=0; i < arc.length; i++) {}";
  } else if (qCycle == 5) {
    change.textContent = "What is the proper way to submit changes to a repository to GitHub?";

    correct = 2;
    tags[0].textContent = "A. Use 'git add .' to add changes then 'git push origin main' to amend the GitHub repository";
    tags[1].textContent = "B. Use 'git add .' to add changes then 'git commit -m' to commit  with message and lastly 'git push origin main' to push the changes";
    tags[2].textContent = "C. Use 'git add .' t add changes then 'git merge' to commit them and lastly 'git push origin main' to push the changes";
    tags[3].textContent = "D. None of the above";
  } else {
    finalTally();
  }
  return;
}
function evalAns(choice) {                //evaluates whether or not choice was correct based on parameter input in HTML & correct variable
  var feedback = document.querySelector("#cue");
  if (choice == correct) {
      feedback.textContent = "Correct"
      feedback.setAttribute("style", "color: chartreuse; text-align: left");
  } else {
     feedback.textContent = "Wrong"
     feedback.setAttribute("style", "color: red; text-align: left");
    secondsLeft = secondsLeft - 15;               //time subtracted when wrong answer is picked
  }
  //  feedback.textContent = "";
  qCycle++;                    //adds one to qCycle which is referenced in startQuiz() to pull up next question
  startQuiz();
}

var timeEl = document.querySelector(".scorecard");
var secondsLeft = 75;
function setTime() {
  // Sets timer in variable
  var timerInterval = setInterval(function () {
    timeEl.textContent = "Timer: " + secondsLeft;
    if (secondsLeft <= 0) {
      // timer stops when it reaches zero or quiz is complete
      clearInterval(timerInterval);
      secondsLeft = 0;
      timeEl.textContent = "Times Up!: " + secondsLeft;
      return;
    } else if (qCycle == 6) {
      clearInterval(timerInterval);
      timeEl.textContent = "Final Score: " + secondsLeft;
    }
    secondsLeft--;

  
  }, 1000);
}

function finalTally() {
  var reveal = document.querySelector("#select"); //hides quiz questions
  reveal.setAttribute("style", "display: none");
  var scoreForm = document.querySelector("#score-form");  //brings back the scoreboard
  scoreForm.setAttribute("style", "display: block");

  scoreForm.addEventListener("submit", function (event) {    //once initial added to form and submitted, the initials and score are saved to local storage
    event.preventDefault();

    var saveData = document.querySelector("#scoreBoard");
    keepScore = {
      initials: saveData.value.trim(),
      score: secondsLeft,
    };

    saveData.value = "";
    localStorage.setItem("hi-score", JSON.stringify(keepScore));
    displayScore();
    return;
  });
}
function displayScore() {               //attempted to reset the beginning screen
  var reveal = document.querySelector(".ciao");
  reveal.setAttribute("style", "display: block");
  var scoreForm = document.querySelector("#score-form");
  scoreForm.setAttribute("style", "display: none");
  timeEl.textContent = "Scores: ";

  var ScoreEl = localStorage.getItem("hi-score");
  JSON.parse(ScoreEl);

  var scoreCard = document.createElement("li");          //stored data added to the scoreboard
  scoreCard.textContent = ScoreEl;
  var scoreTab = document.querySelector(".scorecard");
  scoreTab.appendChild(scoreCard);
  
  return;
}
