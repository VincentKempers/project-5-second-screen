var nameOne;
var name = localStorage.getItem("name");

var meerdere = document.getElementById("meerdere");
var meerdereText = document.getElementById("meerdere-tekst");
var startButton = document.getElementById("start");
var alleen = document.getElementById("alleen");
var alleenText = document.getElementById("alleen-tekst");

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");


function startGameMeerdere() {
	alleenText.style.display = "none";
	meerdereText.style.display = "block";
	startButton.removeAttribute("disabled");
}

function startGameAlleen() {
	meerdereText.style.display = "none";
	alleenText.style.display = "block";
	startButton.removeAttribute("disabled");
}

function storeName() {
	nameOne = prompt("vul hier je naam in", "Jouw Naam");
	localStorage.setItem("name", nameOne);
}



meerdere.addEventListener("click", startGameMeerdere);
alleen.addEventListener("click", startGameAlleen);
startButton.addEventListener("click", storeName, true);
console.log(localStorage.getItem("name"));

