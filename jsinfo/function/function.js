"use strict";

let from = prompt("name", "name");
let text = prompt("message", "message");
function showMessage(from, text) {
  // parameters: from, text
  alert(from + ": " + text);
}

showMessage(from, text); // Ann: Hello! (*)

function showMessage2(from, text) {
  from = "*" + from + "*";
  console.log(from + ":" + text);
}
let from2 = "Ann";
let text2 = "hello";
showMessage2(from2, text2);

function pow(a, b) {
  let result = a;
  for (let i = 1; i < b; i++) {
    result *= x;
  }
  console.log(result);
  return result;
}

let a = prompt("input the number");
let b = prompt("Input the power");

if (b < 1) {
  alert(`the value of ${b} is too low`);
} else {
  alert(pow(a, b));
}

// function expression

function sayHi() {
  alert("Hello");
}

let func = sayHi;
func();
sayHi();
// 1
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else {
    no();
  }
}

let showYes = function () {
  alert("you agreed!");
};
let showCancel = function () {
  alert("you Canceled");
};
ask("Do you agree?", showYes, showCancel);

//short form

function ask2(question, yes, no) {
  confirm(question) ? yes() : no();
}
ask2(
  "Do you agree?",
  function () {
    alert("You agreed");
  },
  function () {
    alert("You canceled");
  }
);

//arrow function task

let ask3 = (question, yes, no) => {
  confirm(question) ? yes() : no();
};

ask3(
  "Do you agree",
  () => alert("You agreed"),
  () => alert("You Cancled")
);

// Styling the code

function pow2(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n <= 0) {
  alert(`Power ${n} is not supported, please enter
         an integer number greater than zero`);
} else {
  alert(pow2(x, n));
}

function showPrime(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    console.log(i);
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    // console.log(i);
  }
}
showPrime(prompt("Input a number", 0));

//other way

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);
  }
}

function isPrime(n) {
  //1st function forwards the number to "n" to check if it's prime
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}
