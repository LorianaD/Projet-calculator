///////// CALCULATRICE //////////////////

let currentInput;
let operator;
let firstNumber;

function press(value) { //value = valeur;
  document.getElementById("display").innerText += value;
  currentInput += value;
}

function calculate() {
  let result = 0;

  if (currentInput.includes("+")) {
    let parts = currentInput.split("+");
    result = Number(parts[0]) + Number(parts[1]);
  } else if (currentInput.includes("-")) {
    let parts = currentInput.split("-");
    result = Number(parts[0]) - Number(parts[1]);
  } else if (currentInput.includes("*")) {
    let parts = currentInput.split("*");
    result = Number(parts[0]) * Number(parts[1]);
  } else if (currentInput.includes("/")) {
    let parts = currentInput.split("/");
    result = Number(parts[0]) / Number(parts[1]);
  }

  document.getElementById("display").innerText = result;
  currentInput = result.toString(); // pour pouvoir continuer à calculer
}

function clearDisplay() {
  currentInput = "";
  document.getElementById("display").innerText = "0";
}

////////////// QUESTIONAIRE //////////////////////////

let 