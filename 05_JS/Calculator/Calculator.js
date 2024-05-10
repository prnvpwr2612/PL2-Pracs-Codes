const clearButtons = document.querySelectorAll(".Clear");
const operatorButtons = document.querySelectorAll(".Operator");
const numberButtons = document.querySelectorAll(".number");
const equalButton = document.querySelector(".equal");
const decimalButton = document.querySelector(".decimal");
const inputEl = document.getElementById("result");

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        appendValue(button.textContent);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        appendValue(button.textContent);
    });
});

clearButtons.forEach(button => {
    button.addEventListener("click", clearResult);
});

equalButton.addEventListener("click", getResult);
decimalButton.addEventListener("click", () => {
    appendValue(decimalButton.textContent);
});

function clearResult() {
    inputEl.value = "";
}

function getResult() {
    inputEl.value = eval(inputEl.value);
}

function appendValue(value) {
    inputEl.value += value;
}