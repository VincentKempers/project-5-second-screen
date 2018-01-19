/*
@TODO
Lopende band
- Maak een js file voor de lopende band
- De quiz wordt aangemaakt a.d.h.v. fases
- indien er niet wordt geraden op de tv dan wordt een fase niet geactiveerd.
- De gebruiker vult in een input het mogelijke goede antwoord.
- bij begin wordt er gecheckt of het goed is
- indien dat het fout is dan gaan er 200 punten van af
- indien het goed is komen er 200 punten bij
    - in beide gevallen ga je naar het resultaten scherm.

*/
var transformationOne = document.getElementById('transformatie-1');
var transformationTwo = document.getElementById('transformatie-2');
var transformationThree = document.getElementById('transformatie-3');
var transformationFour = document.getElementById('transformatie-4');

var score = localStorage.getItem("score");

var QandA = [
    ["Wie is dit persoon", "imka marina", "imka"]
];

function check()
{
    // No more questions?
    if (0 === QandA.length) return;

    // Check answer
    var userAnswer = document.getElementById("answer").value.toLowerCase();
    if (userAnswer === QandA[0][1] || userAnswer === QandA[0][2]) {
        score = Number(score) + 300;
        localStorage.setItem("score", score);
        window.location.href = 'answercl.html';
    } else {
        score = Number(score) - 200;
        localStorage.setItem("score", score);
        window.location.href = 'answerfl.html';
    }
}

window.setTimeout(function () {
      transformationOne.style.display = 'none';
      transformationTwo.style.display = 'flex';
      window.setInterval(function () {
      transformationTwo.style.display = 'none';
      transformationThree.style.display = 'flex';
        window.setInterval(function () {
      transformationThree.style.display = 'none';
      transformationFour.style.display = 'flex';
        }, 5000);
      }, 5000);
    }, 5000);