"use strict";

// example-1
let sum = 0;

while (true) {
  let value = +prompt("Enter a number", "");

  if (!value) break; // (*)

  sum += value;
}
alert("Sum: " + sum);

// task-20

// let i = 0;
// while (i++<5) console.log(i);
let i = 0;
while (++i < 5) console.log(i);

// task-21

for (let n = 2; n <= 10; n++) {
  if (n % 2 == 0) {
    console.log(n);
  }
}

// task-22

for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}

let j = 0;

while (j < 3) {
  alert(`number ${j}`);
  j++;
}

// task-23

let bigNumber;
do {
  bigNumber = prompt("Enter a number greater than 100?", 0);
} while (bigNumber <= 100 && bigNumber);

// task-24
let n = prompt("Enter any limit", 0);

for (let i = 2; i <= n; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    alert(i);
  }
}

// or

findPrime: for (let n = 2; n <= 10; n++) {
  let isPrime = true;

  for (let j = 2; j < n; j++) {
    if (n % j === 0) {
      isPrime = false;
      continue findPrime;
    }
  }
  if (isPrime) {
    console.log(n);
  }
}
