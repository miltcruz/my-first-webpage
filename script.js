document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('calculate').addEventListener('click', function() {

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
});