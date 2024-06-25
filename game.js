let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const gencompChoice = () => {
    let opts = ["rock","paper","scissors"];
    let idx = Math.floor(Math.random() * 3);
    return opts[idx];
}

const playGame = (userChoice) => {
    console.log("User Choice =", userChoice)
    const compChoice = gencompChoice();
    console.log("Comp Choice =",compChoice);
    
};

choices.forEach ((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});