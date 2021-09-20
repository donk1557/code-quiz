
var correct = 0;

function startQuiz() {

  var change = document.getElementById("question");
  change.textContent = "Does it work?";
  

    correct = 3;
    var tags = document.getElementsByClassName("ans");
    tags[0].textContent = "A."
    tags[1].textContent = "B."
    tags[2].textContent = "C."
    tags[3].textContent = "D."

    setTime();
}
function evalAns(choice) {
    var feedback = document.querySelector(".terminus");
    if (choice == correct) {
        feedback.setAttribute("style", "background-color: green");
       console.log('correct');
    } else {
        console.log("wrong");
        feedback.setAttribute("style", "background-color: red");
        secondsLeft = secondsLeft - 15;
    }
  Q2();
}
function Q2() {

    var change = document.getElementById("question");
    change.textContent = "Does it work 2?";
    
  
      correct = 1;
      var tags = document.getElementsByClassName("ans");
      tags[0].textContent = "A."
      tags[1].textContent = "B."
      tags[2].textContent = "C."
      tags[3].textContent = "D."
  
      
  }
var timeEl = document.querySelector(".scorecard");
var secondsLeft = 75;
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
    
      timeEl.textContent = "Timer: " + secondsLeft; 
      secondsLeft--;
  
      if(secondsLeft <= 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
       return;
      }
  
    }, 1000);
  }
  