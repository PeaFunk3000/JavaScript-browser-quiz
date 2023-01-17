var clearScoresBtn = document.querySelector("#clear");
var highScores = document.querySelector("#highscores");

// eventlistener to load highscores on page load
window.addEventListener("load", loadHighScore);

// listener to clearHighScores on clearScoresBtn click

// function to clearHighScores - clear local storage

// function to loadHighScores - obtain from local storage
function loadHighScore() {
    var storage = Object.entries(localStorage);
    storage.sort(function(a, b) {
        return b[1] - a[1];
    });
    storage.forEach(element => {
        var li = document.createElement("li");
        li.textContent = element[0]+":"+ element[1];
        highScores.appendChild(li);
    });
}