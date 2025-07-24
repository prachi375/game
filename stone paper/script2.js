let userscore = 0;
let Computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#User-score");
const ComputerscorePara = document.querySelector("#Computer-score");
const gencompchoice = () => {
    const options = ["stone", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]; 
};

const drawgame = () => {
    msg.innerText = "Game was Draw. Play again.";
        msg.style.backgroundColor ="#081b31";
};

const showWinner = (userWin, userchoice, Computerchoice) => {
    if (userWin) {
        userscore++;
        userscorePara.innerText = userscore; 
        msg.innerText = `You win! Your ${userchoice} beats ${Computerchoice}`;
        msg.style.backgroundColor ="green";
    }else { 
        Computerscore++;
        ComputerscorePara.innerText = Computerscore; 
        msg.innerText = `You lose! ${Computerchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor ="red";
    }
};
const playgame = (userchoice) => {
    const Computerchoice = gencompchoice();

if (userchoice === Computerchoice) {
    drawgame();
} else {
    let userWin = true;
    if (userchoice === "rock"){
        //scissors, paper
        userWin = Computerchoice ===  "paper" ? false : true;
    } else if(userchoice === "paper") {
        // stone, scissors
         userWin = Computerchoice === "scissors" ? false : true;
    }else {
        // stone, paper
         userWin = Computerchoice === "stone" ? false : true;
    }
    showWinner(userWin, userchoice, Computerchoice);
 }
};



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("Id");
        playgame(userchoice);
    });
});