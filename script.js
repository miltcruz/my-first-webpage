/*The loop will continue until the user guesses the correct number.
Inside the loop, the user is prompted to enter a guess, and the number of attempts is incremented.
The program checks if the guess is too high, too low, or correct, and provides feedback accordingly.*/
function loadGuessNumber() {
  // Generate a random number between 1 and 10
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log("randomNumber", randomNumber);
  let attempts = 0;

  // Initialize the guess variable
  let guess;

  while (guess !== randomNumber) {
    // Prompt the user to guess a number
    guess = Number(prompt("Guess a number between 1 and 10:"));

    // Increment the attempts counter
    attempts++;

    // Check if the guess is correct
    if (guess > randomNumber) {
      console.log("Too high! Try again.");
    } else if (guess < randomNumber) {
      console.log("Too low! Try again.");
    } else {
      console.log(
        `Congratulations! You guessed the number in ${attempts} attempts. The number was ${randomNumber}.`,
      );
    }
  }
}

const calculateTip = (billAmount, tipPercentage) => {
  console.log("billAmount", typeof billAmount);
  console.log("tipPercentage", typeof tipPercentage);
  if (typeof billAmount !== "number" || typeof tipPercentage !== "number" || 
      billAmount < 0 || tipPercentage < 0) {
      return "Invalid input. Please enter numbers for bill amount and tip percentage.";
    }

    return (billAmount + (billAmount * (tipPercentage / 100))).toFixed(2);  // Display the total amount with 2 decimal places
};


/*
function checkRequired(element) {
  return element.required && element.value.trim() !== "";
}*/
const checkRequired = element => element?.required && element?.value.trim() !== "";

const showError = (errorElementId, message) => {
  const errorElement = document.getElementById(errorElementId);
  if (errorElement) {
    errorElement.textContent = message;
  }
};

document.addEventListener("DOMContentLoaded", function () {

  /*Contact Form*/
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      const nameValue = name.value.trim();
      const emailValue = email.value.trim();
      const messageValue = message.value.trim();

      let isValid = true;

      if (!checkRequired(name)) {
        showError("name-error", "Name is required.");
        isValid = false;
      }


      if (!checkRequired(message)) {
        showError("message-error", "Message is required.");
        isValid = false;
      }

      if (!checkRequired(email)) {
        showError("email-error", "Email is required.");
        isValid = false;
      } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
        showError("email-error", "Please enter a valid email address.");
        isValid = false;
      }

      if (isValid) {
        // Clear error messages
        showError("name-error", "");
        showError("email-error", "");
        showError("message-error", "");


        const subject = encodeURIComponent(`Contact Form Submission from ${nameValue}`);

        const bodyLines = [
          `Name: ${nameValue}`,
          `Email: ${emailValue}`,
          "",
          `Message: ${messageValue}`
        ];

        const body = encodeURIComponent(bodyLines.join("\r\n"));
        const recipientEmail = "your@email.com";
        const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;


        try {
          // open the user's default email client with the pre-filled email
          window.location.href = mailtoLink;

          //clear the form fields after submission
          name.value = "";
          email.value = "";
          message.value = "";
          
        } catch (error) {
          console.error("Error opening email client:", error);
        }
      }
    });
  }



  // LOAD guesss number
  //loadGuessNumber();

  // Display nav in mobile view
  const burger = document.querySelector(".burger");

  if (burger) {
    burger.addEventListener("click", function () {
      document.querySelector("nav").classList.toggle("open");
    });
  }


  let results = document.getElementById("result");
  let calButton = document.getElementById("calculate");
  let tipForm = document.getElementById("tip-form");

  if (tipForm) {
    tipForm.addEventListener("submit", (event) => {
      // to prevent the form from submitting and refreshing the page
      event.preventDefault();
    
      let billAmount = Number(document.getElementById("billAmount").value);
      let tipPercentage = Number(document.getElementById("tipPercentage").value);
      results.innerHTML = calculateTip(billAmount, tipPercentage); 
    });
  }

  if (calButton) {
    calButton.addEventListener("click", function () {
      // Get the values from the input fields
      let inputNum1 = document.getElementById("num1");
      console.log("inputNum1", inputNum1);
      let num1 = Number(inputNum1.value);

      let num2 = Number(document.getElementById("num2").value);
      let sum = num1 + num2;

      
      console.log("results", results);
      results.innerHTML = "Sum: " + sum;

      console.log("sum", sum);
    });
  }
});
