var playerName = document.getElementById("playername");
var totalScore = document.getElementById("score");
playerName.innerHTML = localStorage.getItem("name");
totalScore.innerHTML = localStorage.getItem("score");

console.log("name : " + localStorage.getItem("name"));
console.log("score : " + localStorage.getItem("score"));