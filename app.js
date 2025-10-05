// Select all required elements
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true; // true = O's turn, false = X's turn

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Enable boxes
const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

// Disable boxes
const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

// Show Winner Message
const showWinner = (winner) => {
  msg.innerText = `Congratulations,Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

// Check for winner
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
      showWinner(pos1);
      return;
    }
  }
};

// Reset Game function
const resetGame = () => {
  turno = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

// Add event to each box
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turno) {
      box.innerText = "O";
      turno = false;
    } else {
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

// Button listeners
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
