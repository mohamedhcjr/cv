"use strict";

let text1 = prompt("Enter a string:");
let count = 0;

for (let i = 0; i < text1.length; i++) {
  if (text1[i] === "e") {
    count++;
  }
}

document.getElementById("q1").innerHTML = "Number of 'e' characters: " + count;

let text2 = prompt("Enter a string:");

let caseSensitive = confirm("Do you want to consider case sensitivity?");

let checkText = text2;

if (!caseSensitive) {
  checkText = checkText.toLowerCase();
}

let reversed = "";

for (let i = checkText.length - 1; i >= 0; i--) {
  reversed += checkText[i];
}

if (checkText === reversed) {
  document.getElementById("q2").innerHTML = text2 + " is a palindrome";
} else {
  document.getElementById("q2").innerHTML = text2 + " is not a palindrome";
}

let values3 = [];

for (let i = 0; i < 3; i++) {
  values3[i] = Number(prompt("Enter value " + (i + 1) + ":"));
}

let sum = values3[0] + values3[1] + values3[2];

let multiplication = values3[0] * values3[1] * values3[2];

let division = values3[0] / values3[1] / values3[2];

document.getElementById("q3").innerHTML =
  "Sum of the 3 values: " +
  values3.join("+") +
  " = " +
  sum +
  "<br>" +
  "Multiplication of the 3 values: " +
  values3.join("*") +
  " = " +
  multiplication +
  "<br>" +
  "Division of the 3 values: " +
  values3.join("/") +
  " = " +
  division;

let values4 = [];

for (let i = 0; i < 5; i++) {
  values4[i] = Number(prompt("Enter value " + (i + 1) + ":"));
}

let ascending = [...values4].sort((a, b) => a - b);

let descending = [...values4].sort((a, b) => b - a);

document.getElementById("q4").innerHTML =
  "You've entered the values: " +
  values4.join(", ") +
  "<br>" +
  "Values after sorting descending: " +
  descending.join(", ") +
  "<br>" +
  "Values after sorting ascending: " +
  ascending.join(", ");

let radius = Number(prompt("Enter the radius of the circle:"));

let area = Math.PI * radius ** 2;

document.getElementById("q5").innerHTML = "The area of the circle is: " + area;
