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
        }
        else if (guess < randomNumber) {
            console.log("Too low! Try again.");
        }
        else {
           console.log(`Congratulations! You guessed the number in ${attempts} attempts. The number was ${randomNumber}.`);
        }
    }
}


document.addEventListener('DOMContentLoaded', function() {

    // LOAD guesss number
    //loadGuessNumber();

    let calButton = document.getElementById('calculate');

    if (calButton) {
        calButton.addEventListener('click', function() {

            // Get the values from the input fields
            let inputNum1 = document.getElementById('num1');
            console.log("inputNum1", inputNum1);
            let num1 = Number(inputNum1.value);


            let num2 = Number(document.getElementById('num2').value);
            let sum = num1 + num2;

            let results = document.getElementById('result');
            console.log("results", results);
            results.innerHTML = "Sum: " + sum;


            console.log("sum", sum);
        });
    }
});