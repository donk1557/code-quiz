# code-quiz

This program provides a five question; multiple choice quiz on coding in general. The participant answers each question and at the end, they receive a numerical score to which they assign their initials to. The new score will be displayed on the score board. The repository contains images displaying the program at different intervals: before the quiz, during the quiz, and after the quiz.

Here is the link: https://donk1557.github.io/code-quiz/

##functions startQuiz() and evalAns()

startQuiz() contains the list of questions; once the start button is clicked, the participant is taken to the first question and the timer function is called. When an answer choice is chosen, evalAns() is called which compares the assigned parameter value of the answer choice to that of the correct variable. The participant is given a visual word cue near the bottom left of the quiz border. The participant is then cycled back to startQuiz() where they will answer the next question so on and so forth.

##function setTime()

This function displays a timer toward the right inside the scoreboard which counts down from 75 seconds. Each time the participant answers incorrectly, 15 seconds is subtracted from the timer. Once the timer reaches zero or the quiz is completed, the participant is shown their score (which is equal to the remaining time) and an input form to type their initials.

##functions finalTally() and displayScore()

finalTally() stores the initials and the score of the participant in local storage where as displayScore() displays the stored data on the score board.