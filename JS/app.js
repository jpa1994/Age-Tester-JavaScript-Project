
// ClassName (Bootstrap)
let pMessage = document.querySelector(".message");
console.log(pMessage);

let button = document.getElementById("hereButton"); // IdName

let title = document.querySelector("h1");

let paragraph = document.querySelector("p");

// Text from an input box
let textBox = document.getElementById("num");
Number = Number(textBox.value)
// Grabs the value of a textbox (IMMEDIATELY ONLOAD)
console.log(textBox.value);

// Clears input field and message
let clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", () => {
  document.getElementById("num").value = "";
  pMessage.innerText = " ";
});


button.addEventListener("click", () => {
    // Re-views and grabs the latest changes to it.
    textBox = document.getElementById("num");
    console.log(textBox.value);
    
    if(isNaN(textBox.value) ) { // isNaN is short for "Is not a number", checks if variable is not a number
        pMessage.innerText = "Please enter a whole number.";
    } else if (textBox.value <= 0 || textBox.value > 120) {
        pMessage.innerText = "ERROR";
    } else if (textBox.value >= 18) {
         if(textBox.value >= 65) {
                pMessage.innerText = "You are a senior citzen. Welcome!";
            } else {
                pMessage.innerText = "You are an adult. Welcome!";
            }
    } else  {
         pMessage.innerText = "You are a minor. Leave.";
    }
    title.style.fontSize = "50px";
    
    return textBox.value;
  
});