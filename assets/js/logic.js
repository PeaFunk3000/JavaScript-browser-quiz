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
function startQuiz() {
    score = 0;
    quizIndex = 0;
    timerE.textContent = timerCount;
    startScreenE.setAttribute('class', 'hide');
    timerID = setInterval(clockTimer, 1000);
    getQuestion();
}

// Func to getQuestion - create choice buttons, call questionClick onclick
function getQuestion() {
    choicesE.innerHTML = '';
    var currentQuestion = questions[quizIndex];
    var questionTitle = document.getElementById("question-title");
    questionTitle.textContent = currentQuestion.title;
    questionsE.removeAttribute('class');

    currentQuestion.choices.forEach(function (choice, i) {
        var choiceBtn = document.createElement('button');
        choiceBtn.setAttribute('class', 'choices');
        choiceBtn.setAttribute('value', choice);
        choiceBtn.textContent = i + 1 + ". " + choice;
        choiceBtn.onclick = questionClick;
        choicesE.appendChild(choiceBtn);

    })
}

// Func for questionClick - display Correct/Incorrect on selection, increment to next Question, reduce timer if incorrect
function questionClick(selection) {
    console.log(selection);
    // console.log inspection yields selection.target.attributes[1].nodeValue as selection value from questions.js
    if (selection.target.attributes[1].nodeValue == questions[quizIndex].answer) {
        feedbackE.setAttribute('class', 'feedback');
        setTimeout(function() {
            feedbackE.setAttribute('class', 'hide');
        }, 1000);
        score = score + 1;
        feedbackE.textContent = "CORRECT";
        sfxCorrect.play();
    } else {
        giveFeedback = feedbackE.setAttribute('class', 'feedback');
        setTimeout(function() {
            feedbackE.setAttribute('class', 'hide');
        }, 1000);
        feedbackE.textContent = "INCORRECT (-10 s)";
        sfxIncorrect.play();
        timerCount = timerCount - 10;
    }
    if (timerCount <= 0) {
        clearInterval(timerID);
        quizEnd();
    } else {
        quizIndex++;
        if (quizIndex >= questions.length) {
            quizEnd();
        } else {
            getQuestion();
        }
    }
}

// Func to quizEnd - stop timer, show end screen
function quizEnd() {
    clearInterval(timerID);
    timerCount = 'END'
    timerE.textContent = timerCount;
    feedbackE.setAttribute('class', 'hide');
    questionsE.setAttribute('class', 'hide');
    endScreen.removeAttribute('class');
    finalScoreE.textContent = finalScoreE.textContent + score;

}

// Func for clockTimer - invoked in startQuiz, call quizEnd if runs to 0
function clockTimer() {
    timerCount--;
    timerE.textContent = timerCount;
    if (timerCount === 0) {
        quizEnd();
    }
};

// Func to save score on submit - record user data
function recordUser() {
    var initials = initialScoreE.value;
    localStorage.setItem(initials, score);
    window.location.href = "./highscores.html";
}

