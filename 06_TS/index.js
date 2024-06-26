var numInput = document.getElementById("numInput");
var printButton = document.getElementById("printButton");
var display = document.getElementById("display");
function printNumber() {
    var num = parseFloat(numInput.value); // Parse the input value to a number
    if (!isNaN(num)) { // Check if the parsed number is a valid number
        display.textContent = num.toString(); // Display the number
    }
    else {
        display.textContent = "Invalid input"; // Display error message for invalid input
    }
}
printButton.addEventListener("click", printNumber);
