// BUTTON CLICK INTERACTION
const message = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

// Change text + color when button is clicked
changeBtn.addEventListener("click", function () {
  message.innerText = "Button Clicked! Text & color changed!";
  message.style.color = "blue";
});


// SIMPLE COUNTER
let count = 0;
const counterDisplay = document.getElementById("counterDisplay");
const counterBtn = document.getElementById("counterBtn");

// Increment counter on click
counterBtn.addEventListener("click", function () {
  count++;
  counterDisplay.innerText = "Counter: " + count;
});


// TOGGLE LOGIC
let toggleOn = false;
const toggleText = document.getElementById("toggleText");
const toggleBtn = document.getElementById("toggleBtn");

// Toggle text content & color
toggleBtn.addEventListener("click", function () {
  toggleOn = !toggleOn;

  if (toggleOn) {
    toggleText.innerHTML = "Text is <strong>ON</strong>";
    toggleText.style.color = "green";
  } else {
    toggleText.innerHTML = "Text is <strong>OFF</strong>";
    toggleText.style.color = "black";
  }
});


// BASIC FORM VALIDATION
const demoForm = document.getElementById("demoForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

// Validate on submit
demoForm.addEventListener("submit", function (event) {
  // Prevent form from submitting
  event.preventDefault();

  // Clear old errors
  nameError.innerText = "";
  emailError.innerText = "";

  let valid = true;

  // Check name
  if (nameInput.value.trim() === "") {
    nameError.innerText = "Name is required!";
    valid = false;
  }

  // Check email
  if (emailInput.value.trim() === "") {
    emailError.innerText = "Email is required!";
    valid = false;
  } else if (!emailInput.value.includes("@")) {
    emailError.innerText = "Email must contain @";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    demoForm.reset();
  }
});
