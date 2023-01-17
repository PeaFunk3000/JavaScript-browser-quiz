var startGame = document.querySelector('#start');
var timerE = document.querySelector('.timer');
var startScreenE = document.querySelector('#start-screen');
var endScreen = document.querySelector('#end-screen');
var finalScoreE = document.querySelector('#final-score');
var initialScoreE = document.querySelector('#initials');
var questionsE = document.querySelector('#questions');
var choicesE = document.querySelector('#choices');
var submitE = document.querySelector('#submit');
var feedbackE = document.querySelector('#feedback');


var quizIndex = 0;
var timePerQ = 5;
var timerCount = questions.length * timePerQ;
var timerID;
var score = 0;

var sfxCorrect = new Audio('./assets/sfx/correct.wav');
var sfxIncorrect = new Audio('./assets/sfx/incorrect.wav');

startGame.addEventListener("click", (startQuiz)); 

// Func to startQuiz - start timer calling clockTimer in setInterval, show first question calling getQuestion
function startQuiz () {
    score = 0;
    quizIndex = 0;
    timerE.textContent = timerCount;
    startScreenE.setAttribute('class', 'hide');
    timerID = setInterval(clockTimer, 1000);
    getQuestion();
}

// Func to getQuestion - create choice buttons, call questionClick onclick

// Func for questionClick - display Correct/Incorrect on selection, increment to next Question, reduce timer if incorrect

// Func to quizEnd - stop timer, show end screen
function clockTimer () {
    timerCount --;
    timerE.textContent = timerCount; 
    if (timerCount === 0) {
        quizEnd();
      }
    };

// Func for clockTimer - invoked in startQuiz, call quizEnd if runs to 0

// Func to save highScore - record user data

