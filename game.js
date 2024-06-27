let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let myScore = document.querySelector("#you");
let computerScore = document.querySelector("#comp");

const gencompChoice = () => {
    let opts = ["rock","paper","scissors"];
    let idx = Math.floor(Math.random() * 3);
    return opts[idx];
}

const winner = (userWin, userChoice, compChoice) => {
    if(userWin === true){
        userScore++;
        myScore.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    } else {
        compScore++
        computerScore.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const drawGame = () => {
    msg.innerText = "Game Drawn! Play again.";
    msg.style.backgroundColor = "#DA7422"
};

const playGame = (userChoice) => {
    const compChoice = gencompChoice();
    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else if(userChoice === "scissors"){
            userWin = compChoice === "rock" ? false : true;
        }
        winner(userWin, userChoice, compChoice);
    }
};

choices.forEach ((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});