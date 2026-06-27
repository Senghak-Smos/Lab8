const display = document.getElementById("display");
let isCalculated = false;

function appendValue(value) {
  if (
    display.innerText === "0" ||
    display.innerText === "Error" ||
    isCalculated
  ) {
    if (value === "1/") {
      display.innerText = "1/";
    } else {
      display.innerText = value;
    }
    isCalculated = false;
  } else {
    if (display.innerText.length < 11) {
      display.innerText += value;
    }
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function backspace() {
  if (display.innerText.length > 1 && display.innerText !== "Error") {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = "0";
  }
}

function toggleSign() {
  if (display.innerText !== "0" && display.innerText !== "Error") {
    if (display.innerText.startsWith("-")) {
      display.innerText = display.innerText.slice(1);
    } else {
      display.innerText = "-" + display.innerText;
    }
  }
}

function square() {
  try {
    let currentVal = eval(display.innerText);
    display.innerText = Math.pow(currentVal, 2);
    isCalculated = true;
  } catch (error) {
    display.innerText = "Error";
  }
}

function squareRoot() {
  try {
    let currentVal = eval(display.innerText);
    if (currentVal < 0) {
      display.innerText = "Error";
    } else {
      let result = Math.sqrt(currentVal);
      display.innerText = parseFloat(result.toFixed(4));
    }
    isCalculated = true;
  } catch (error) {
    display.innerText = "Error";
  }
}

function calculate() {
  try {
    let expression = display.innerText;
    let result = eval(expression);
    display.innerText = result;
    isCalculated = true;
  } catch (error) {
    display.innerText = "Error";
  }
}
