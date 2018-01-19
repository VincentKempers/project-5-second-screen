var validation = document.getElementById('validation');
var wrongAnswer = document.getElementById('false');
var rightAnswer = document.getElementById('correct');
var score = localStorage.getItem("score");

console.log(score);
console.log(window.location.href);

  if (window.location.href == "http://localhost:8765/quiz/answerf3.html") {
    window.setTimeout(function () {
      validation.style.display = 'none';
      wrongAnswer.style.display = 'flex';
      score = Number(score) - 100;
      localStorage.setItem("score", score);
      console.log(score);
      window.setInterval(function () {
        window.location.href = 'tussenstand3.html';  
      }, 2000);
    }, 2000);
  } else {
    window.setTimeout(function () {
      validation.style.display = 'none';
      rightAnswer.style.display = 'flex';
      score = Number(score) + 100;
      console.log(score);
      localStorage.setItem("score", score);
      window.setInterval(function () {
        window.location.href = 'tussenstand3.html';  
      }, 2000);
    }, 2000);
  }