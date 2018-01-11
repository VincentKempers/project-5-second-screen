var playerName = document.getElementById("playername");
playerName.innerHTML = localStorage.getItem("name");
var score = 2;
//  (function() {
//   function buildQuiz() {
//     // we'll need a place to store the HTML output
//     const output = [];

//     // for each question...
//     myQuestions.forEach((currentQuestion, questionNumber) => {
//       // we'll want to store the list of answer choices
//       const answers = [];

//       // and for each available answer...
//       for (letter in currentQuestion.answers) {
//         // ...add an HTML radio button
//         answers.push(
//           `<label>
//             <input type="radio" name="question${questionNumber}" value="${letter}">
//             ${currentQuestion.answers[letter]}
//           </label>`
//         );
//       }

//       // add this question and its answers to the output
//       output.push(
//         `<div class="question"> ${currentQuestion.question} </div>
//         <div class="answers"> ${answers.join("")} </div>`
//       );
//     });

//     // finally combine our output list into one string of HTML and put it on the page
//     quizContainer.innerHTML = output.join("");
//   }

//   function showResults() {
//     // gather answer containers from our quiz
//     const answerContainers = quizContainer.querySelectorAll(".answers");

//     // keep track of user's answers
//     let numCorrect = 0;

//     // for each question...
//     myQuestions.forEach((currentQuestion, questionNumber) => {
//       // find selected answer
//       const answerContainer = answerContainers[questionNumber];
//       const selector = `input[name=question${questionNumber}]:checked`;
//       const userAnswer = (answerContainer.querySelector(selector) || {}).value;

//       // if answer is correct
//       if (userAnswer === currentQuestion.correctAnswer) {
//         // add to the number of correct answers
//         numCorrect++;

//         // color the answers green
//         answerContainers[questionNumber].style.color = "lightgreen";
//       } else {
//         // if answer is wrong or blank
//         // color the answers red
//         answerContainers[questionNumber].style.color = "red";
//       }
//     });

//     // show number of correct answers out of total
//     resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
//   }

//   const quizContainer = document.getElementById("quiz");
//   const resultsContainer = document.getElementById("results");
//   const submitButton = document.getElementById("submit");
//   const myQuestions = [
//     {
//       question: "Wie gaat er trouwen met Prins Harry?",
//       answers: {
//         a: "Meghan",
//         b: "Patty Brard",
//         c: "Jim Bakkum",
//         d: "Kim Kardashian"
//       },
//       correctAnswer: "a"
//     },
//     {
//       question: "Welke BN'er is zijn horloge gestolen?",
//       answers: {
//         a: "Humberto Tan",
//         b: "Arie Boomsma",
//         c: "Patty Brard",
//         d: "Jort Kelder",
//       },
//       correctAnswer: "d"
//     },
//     {
//       question: "Welke BN'er heeft eeen haartransplantatie moeten doen?",
//       answers: {
//         a: "Jort Kelder",
//         b: "Humberto Tan",
//         c: "Arie Boomsma",
//         d: "Gordon"
//       },
//       correctAnswer: "c"
//     },
//     {
//       question: "Wie ging foto's maken bij de Rohingya's",
//       answers: {
//         a: "Jort Kelder",
//         b: "Gordon",
//         c: "Jim Bakkum",
//         d: "Humberto Tan"
//       },
//       correctAnswer: "d"
//     },
//   ];

//   // display quiz right away
//   buildQuiz();

//   // on submit, show results
//   submitButton.addEventListener("click", showResults);
// })();

var myQuestions = [
    ["Wie gaat er trouwen met Prins Harry?", "Meghan","Kim Kardashian","Jim Bakkum","Patty","Meghan"],
    ["Welke BN'er is zijn horloge gestolen?", "Jort Kelder","Jort Kelder","Jort Kelder","Jort Kelder","Jort Kelder"],
    ["Welke BN'er heeft eeen haartransplantatie moeten doen?", "Humberto Tan", "Jim Bakkum", "Arie Boomsma", "Kim Kardashian", "Arie Boomsma"],
    ["Wie ging foto's maken bij de Rohingya's?", "Jim Bakkum", "Minister van Financien", "Jamai", "Humberto Tan","Humberto Tan"]
];

var buttonA = document.getElementById("button-a").innerHTML = myQuestions[0][1];
var buttonB = document.getElementById("button-b").innerHTML = myQuestions[0][2];
var buttonC = document.getElementById("button-c").innerHTML = myQuestions[0][3];
var buttonD = document.getElementById("button-d").innerHTML = myQuestions[0][4];
document.getElementsByTagName("BUTTON")[0].setAttribute("value", myQuestions[0][1]);
document.getElementsByTagName("BUTTON")[1].setAttribute("value", myQuestions[0][2]);
document.getElementsByTagName("BUTTON")[2].setAttribute("value", myQuestions[0][3]);
document.getElementsByTagName("BUTTON")[3].setAttribute("value", myQuestions[0][4]);
var rightAnswer = myQuestions[0][5];
var userAnswer = document.querySelector("quiz");

userAnswer.addEventListener('click', check());
console.log(userAnswer);

function check(){

    if (rightAnswer === userAnswer) {
        myQuestions.shift();
        console.log(userAnswer);
        console.log("correct");
        score + 100;
    }
    else {
      myQuestions.shift();
        console.log("Incorrect");
        score - 100;
    }
     if (0 != myQuestions.length) {
        document.getElementById('question').innerHTML = myQuestions[0][0];
    } else {
      console.log('done');
    }
}

console.log("name : " + localStorage.getItem("name"));
console.log("score : " + localStorage.getItem("score"));