// ClassName (Bootstrap)
let pMessage = document.querySelector(".message");
console.log(pMessage);

let button = document.getElementById("hereButton"); // IdName
let clearButton = document.getElementById("clearButton");

// Clears input field and message
clearButton.addEventListener("click", () => {
  document.getElementById("num").value = "";
  pMessage.innerText = " ";
});

// Calculates age based on given birth date
function calculateAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const thisYearBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

  if (today < thisYearBirthday) {
    age--;
  }

  return age;
}

button.addEventListener("click", () => {
  // Get the latest date input
  const dateInput = document.getElementById("num").value;
  console.log(dateInput);

  if (!dateInput) {
    pMessage.innerText = "Please select your birthdate.";
    return;
  }

  const birthdate = new Date(dateInput);
  const age = calculateAge(birthdate);

  if (age <= 0 || age > 120) {
    pMessage.innerText = "ERROR";
  } else if (age >= 18) {
    if (age >= 65) {
      pMessage.innerText = "You are a senior citizen. Welcome!";
    } else {
      pMessage.innerText = "You are an adult. Welcome!";
    }
  } else {
    pMessage.innerText = "You are a minor. Leave.";
  }

  return age;
});