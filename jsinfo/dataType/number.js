"use strict";

// learge numbers like billions in short way
let billion = 1e9;
let oneBillion = 1000_000_000;

console.log(billion);
console.log(oneBillion);

let oneMicroSecond = 1e-6;

console.log(oneMicroSecond);

// toString

console.log(billion.toString(36));
console.log(billion.toString(16));
console.log(billion.toString(8));
console.log(billion.toString(2));
console.log(billion.toString());

const decimalNumber = 123.5455678;

console.log(Math.ceil(decimalNumber));
console.log(Math.floor(decimalNumber));
console.log(Math.round(decimalNumber));
console.log(Math.trunc(decimalNumber));
console.log(decimalNumber.toFixed(2));
console.log(+decimalNumber.toFixed(2));
console.log(decimalNumber.toLocaleString(2));
console.log(decimalNumber.toExponential(2));
console.log(decimalNumber.toPrecision(2));

// infinity

console.log(1e500); // Infinity

// isFinite, isNaN & Object.is()
// let num = +prompt("Enter a number", "");

// will be true unless you enter Infinity, -Infinity or not a number
// alert(isFinite(num));

console.log(Object.is(0, -0));
console.log(Object.is(NaN, NaN));

// task-1

// const a = +prompt("Enter the first Number", " ");
// const b = +prompt("Enter the second Number", " ");
// alert(a + b);

// task-2
function random(min, max) {
  return min + Math.random() * (max - min);
}
console.log(random(1, 3));
console.log(random(1, 3));
console.log(random(1, 3));
// task-3:-
// Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

// Any number from the interval min..max must appear with the same probability.
function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}
console.log(randomInteger(1, 3));
console.log(randomInteger(1, 3));
console.log(randomInteger(1, 3));
