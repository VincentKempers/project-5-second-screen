let nameOne;

const meerdere = document.getElementById('meerdere');
const meerdereText = document.getElementById('meerdere-tekst');
const startButton = document.getElementById('start');
const alleen = document.getElementById('alleen');
const alleenText = document.getElementById('alleen-tekst');

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

let score = 0;

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
}

//  function WriteCookie()
//             {
//                if( document.myform.contestant.value == "" ){
//                   alert("Enter some value!");
//                   return;
//                }
//                cookievalue= escape(document.myform.contestant.value) + ";";
//                document.cookie="name=" + cookievalue;
//             }


// function ReadCookie()
//             {
//                let allcookies = document.cookie;
//                document.write ("All Cookies : " + allcookies );
               
//                // Get all the cookies pairs in an array
//                cookiearray = allcookies.split(';');
//                console.log(cookiearray);

//                // Now take key value pair out of this array
//                for(let i=0; i<cookiearray.length; i++){
//                   name = cookiearray[i].split('=')[0];
//                   value = cookiearray[i].split('=')[1];
//                   nameOne = value;
//                   document.write ("Key is : " + name + " and Value is : " + value);
//                }
//             }




meerdere.addEventListener('click', startGameMeerdere);
alleen.addEventListener('click', startGameAlleen);
startButton.addEventListener('click', storeName, true);



console.log(localStorage.getItem('name'));

