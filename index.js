var nameOne;
var name = localStorage.getItem('name');
var score = 2;

const meerdere = document.getElementById('meerdere');
const meerdereText = document.getElementById('meerdere-tekst');
const startButton = document.getElementById('start');
const alleen = document.getElementById('alleen');
const alleenText = document.getElementById('alleen-tekst');
const playerName = document.getElementById('playername');

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


function startGameMeerdere() {
	alleenText.style.display = 'none';
	meerdereText.style.display = 'block';
	startButton.removeAttribute('disabled');
	// writeCookie();
}

function startGameAlleen() {
	meerdereText.style.display = 'none';
	alleenText.style.display = 'block';
	startButton.removeAttribute('disabled');
}

function storeName() {
	nameOne = prompt('vul hier je naam in', 'Jouw Naam');
	localStorage.setItem('name', nameOne);
	localStorage.setItem('scores', score);
}

meerdere.addEventListener('click', startGameMeerdere);
alleen.addEventListener('click', startGameAlleen);
startButton.addEventListener('click', storeName, true);

console.log(localStorage.getItem('name'));
