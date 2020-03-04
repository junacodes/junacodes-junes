
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user - score");
const computerScore_span = document.getElementById("computer - score");
const scoreBoard_div = document.querySelector(".score-border");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getcomputerChoice() {
    const choice = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choice[randomNumber];
}
function convertworld(letter) {
    if (letter === "r") return "rock";
    if (letter === "p") return "paper";
    return "scissors";
}

function win(userChoice, computerChoice) {

    userScore++;
    document.getElementById("user-score").innerHTML = userScore;
    document.getElementById("computer-score").innerHTML = computerScore;
    result_p.innerHTML = `${convertworld(userChoice)}  beats  ${convertworld(computerChoice)}  .You win!!!`;
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('green-glow');
    setTimeout(function () { userChoice_div.classList.remove('green-glow') }, 3000);

}

function lose(userChoice, computerChoice) {
    computerScore++;
    document.getElementById("user-score").innerHTML = computerScore;
    document.getElementById("computer-score").innerHTML = computerScore;
    result_p.innerHTML = `${convertworld(userChoice)}  loses  ${convertworld(computerChoice)}  .You lost!!!`;
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('red-glow');
    setTimeout(function () { userChoice_div.classList.remove('red-glow') }, 3000);


}
function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${convertworld(userChoice)}  eqauls  ${convertworld(computerChoice)}  . it's a drawww!!`;
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('gray-glow');
    setTimeout(function () { userChoice_div.classList.remove('gray-glow') }, 3000);

}


function game(userChoice) {
    const computerChoice = getcomputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);

            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);

            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
    }
}
function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })
}
main();