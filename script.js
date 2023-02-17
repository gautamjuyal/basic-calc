const buttons = document.querySelectorAll(".btn");
const inputExp = document.querySelector(".expression");
const res = document.querySelector(".result");

let expression = [];
let displayText = expression.join("");
let result;

function buttonClickHandler(e) {
  const buttonPressed = e.target.textContent;

  if (buttonPressed == "CE") {
    expression.length <= 1 ? (expression = []) : expression.pop();
    displayText = expression.join("");
    inputExp.textContent = displayText;
    return;
  }
  if (e.target.textContent === "=") {
    displayText = eval(displayText).toString();
    inputExp.textContent = displayText;
    expression = [...displayText];
    return;
  }

  expression.push(buttonPressed);
  displayText = expression.join("");
  inputExp.textContent = displayText;
}

for (button of buttons) {
  button.addEventListener("click", buttonClickHandler);
}
