let userScore = 0;
let computerScore = 0;
let drawScore = 0;
const drawScore_span = document.getElementById('draw-count');
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector(".score-board")
const result_div = document.querySelector(".results > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissor_div = document.getElementById("s")



function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function win(userChoice, compChoice) {
   userScore++;
   userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = computerScore;
   result_div.innerHTML = `${convertToWord(userChoice.fontcolor("blue"))} beats ${convertToWord(compChoice)}. You Win!`
   
}

function lose(userChoice, compChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(compChoice)} beats ${convertToWord(userChoice)}. You Lose!`
}

function draw(userChoice, compChoice) {
    drawScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    drawScore_span.innerHTML = drawScore;
    result_div.innerHTML = `${convertToWord(userChoice)} ties ${convertToWord(compChoice)}. No one Wins!`
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
        rock_div.addEventListener('click', function(){
        game("r")
    } )

    paper_div.addEventListener('click', function(){
        game("p")
    } )

    scissor_div.addEventListener('click', function(){
        game("s")
    } )
    }

main();