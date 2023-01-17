var clearScoresBtn = document.querySelector("#clear");
var highScores = document.querySelector("#highscores");

// eventlistener to load highscores on page load
window.addEventListener("load", loadHighScore);

// listener to clearHighScores on clearScoresBtn click
clearScoresBtn.addEventListener("click", clearHighScores)

// function to clearHighScores - clear local storage, clear HTML content
function clearHighScores() {
    localStorage.clear();
    highScores.innerHTML = '';
}
// function to loadHighScores - obtain from local storage
function loadHighScore() {
    var storage = Object.entries(localStorage);
    // sort storage by i[1] so highest score at the top
    storage.sort(function (a, b) {
        return b[1] - a[1];
    });
    //forEach to create li and append
    storage.forEach(element => {
        var li = document.createElement("li");
        li.textContent = element[0] + ":" + element[1];
        highScores.appendChild(li);
    });
}