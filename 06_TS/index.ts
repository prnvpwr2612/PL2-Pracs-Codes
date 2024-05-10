// Get elements from the DOM
const numInput = document.getElementById("numInput") as HTMLInputElement;
const printButton = document.getElementById("printButton") as HTMLButtonElement;
const display = document.getElementById("display") as HTMLSpanElement;

// Function to handle button click
function printNumber(): void {
    const num: number = parseFloat(numInput.value); // Parse the input value to a number

    if (!isNaN(num)) { // Check if the parsed number is a valid number
        display.textContent = num.toString(); // Display the number
    } else {
        display.textContent = "Invalid input"; // Display error message for invalid input
    }
}

// Add event listener to the button
printButton.addEventListener("click", printNumber);
