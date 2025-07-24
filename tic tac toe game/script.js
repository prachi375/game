let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
const colors = ["#ffcccc, #ccffcc, #ccccff, #ffffcc, #ffccee, #cceeff, #eeffcc, #ffccff, #ccffff"];

boxes.forEach ((box, index) => {
    box.style.backgroundcolor = colors[index];
});


const resetGame = () => {
    turnO =true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
       if (turnO) {
            box.innerText ="O";
            box.classList.add("O");
            turnO = false;
            
        } else {
            box.innerText ="X";
            box.classList.add("X");
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
}); 
const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
} 

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("O", "X");
    }
} 

const showWinner = (Winner) => {
    msg.innerText =`Congratulations,Winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkWinner = () => {
    for ( let pattern of winpatterns) {
      let Pos1Val = boxes[pattern[0]].innerText;
      let Pos2Val = boxes[pattern[1]].innerText;
      let Pos3Val = boxes[pattern[2]].innerText;

      if(Pos1Val != "" && Pos2Val != "" && Pos3Val != "") {
        if(Pos1Val === Pos2Val && Pos2Val === Pos3Val){
            showWinner(Pos1Val);
        }
      }
    } 
};

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
