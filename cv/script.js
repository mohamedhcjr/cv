'use strict';

function exchangeEgyPound(egyPound) {
    return Math.round(egyPound / 32);
}
function equalFunc(a, b, c) {
    if (a === b && b === c) {
        return 3;
    } else if (a === b || a === c || b === c) {
        return 2;
    } else {
        return 0;
    }
}
function displayHeadings() {
        let message = prompt("Enter a message:");

        for (let i = 1; i <= 6; i++) {
            document.write(`<h${i}>${message}</h${i}>`);
        }
        setTimeout(getuser, 10000);
    }
    function getValues() {
    let sum = 0;
    let values = [];

    while (true) {
        let value = prompt("Enter a number for the sum:");

       
        if (isNaN(value) || value.trim() === "") {
            alert("Please enter a valid number");
            continue;
        }

        value = Number(value);

       
        if (value === 0) {
            break;
        }

        sum += value;
        values.push(value);

       
        if (sum > 50) {
            break;
        }
    }

    alert("Values: " + values.join(", ") + "\nSum = " + sum);
    setTimeout(displayHeadings, 10000);
}



    

console.log(equalFunc(3, 4, 3)); 
console.log(equalFunc(1, 1, 1)); 
console.log(equalFunc(3, 4, 1)); 
console.log(exchangeEgyPound(2000));
console.log(exchangeEgyPound(340));   
setTimeout(getValues, 10000);
function getuser() {
    const firstName = prompt("Enter your first name:");
    const birthYear = prompt("Enter your age:");
    const mobileNumber = prompt("Enter your mobile number:");
    const color = prompt("Enter your favorite color:\n1. Red\n2. Blue\n3. Green");

    if (color === "1" || color === "2" || color === "3") {

        if (color === "1") {
            document.write(`<p><strong style="color:red">Welcome dear ${firstName || "Unknown"}!</strong></p>`);
            document.write(`<p><strong style="color:red">You are ${birthYear || "Unknown"}</strong></p>`);
            document.write(`<p><strong style="color:red">Mobile Number:</strong> ${mobileNumber || "Unknown"}</p>`);
        }

        else if (color === "2") {
            document.write(`<p><strong style="color:blue">Welcome dear ${firstName || "Unknown"}!</strong></p>`);
            document.write(`<p><strong style="color:blue">You are ${birthYear || "Unknown"}</strong></p>`);
            document.write(`<p><strong style="color:blue">Mobile Number:</strong> ${mobileNumber || "Unknown"}</p>`);
        }

        else if (color === "3") {
            document.write(`<p><strong style="color:green">Welcome dear ${firstName || "Unknown"}!</strong></p>`);
            document.write(`<p><strong style="color:green">You are ${birthYear || "Unknown"}</strong></p>`);
            document.write(`<p><strong style="color:green">Mobile Number: ${mobileNumber || "Unknown"}</strong></p>`);
        }

    }
     else {
        alert("Invalid color selection. Please choose 1, 2, or 3.");
        getuser();
    }
}



