var score = localStorage.getItem("score");

var QandA = [
    ["Hoeveel vragen gaat Albert Verlinde goed hebben?", "8"],
    ["Hoeveel vragen gaat Albert Verlinde fout hebben?", "1"]
];

function check()
{
    // No more questions?
    if (0 === QandA.length) return;

    // Check answer
    var userAnswer = document.getElementById("answer").value.toLowerCase();
    if (userAnswer === QandA[0][1]) {
        alert("Correct");
        score = Number(score) + 200;
        localStorage.setItem("score", score);
    }
    else {
        alert("Incorrect");
        score = Number(score) - 100;
        localStorage.setItem("score", score);
    }
    // Delete that question
    QandA.shift();
    // And move to next
    if (0 != QandA.length) {
        document.getElementById('question').innerHTML = QandA[0][0];
    } else {
        window.location.href = 'tussenstand4.html';  
    }
}