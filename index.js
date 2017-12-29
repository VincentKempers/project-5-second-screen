var nameOne;

var meerdere = document.getElementById('meerdere');
var meerdereText = document.getElementById('meerdere-tekst');
var startButton = document.getElementById('start');

var alleen = document.getElementById('alleen');
var alleenText = document.getElementById('alleen-tekst');

function startGameMeerdere() {
	alleenText.style.display = 'none';
	meerdereText.style.display = 'block';
	startButton.removeAttribute('disabled');
}

function startGameAlleen() {
	meerdereText.style.display = 'none';
	alleenText.style.display = 'block';
	startButton.removeAttribute('disabled');
}

function storeName() {
	nameOne = prompt('Vul hier je naam in', 'jouw naam');
}

meerdere.addEventListener('click', startGameMeerdere);
alleen.addEventListener('click', startGameAlleen);
startButton.addEventListener('click', storeName, true)