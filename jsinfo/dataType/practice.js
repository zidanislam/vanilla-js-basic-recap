"use strict";

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map((user) => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: `${user.id}`,
// }));
// /* ... your code ... */

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// console.log(usersMapped); // 1
// console.log(usersMapped[0].fullName);

// function unique(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// let strings = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// console.log(unique(strings));

// Create an extendable calculator
// Shuffle an array
// Create keyed object from array

// Map()
let obj = {
  name: "Zidan",
  age: 27,
  gender: "male",
};

let newMap = new Map(Object.entries(obj)); //Here, Object.entries returns the array of key/value pairs: [ ["name","John"], ["age", 30] ]. That’s what Map needs.

console.log(newMap);

let john = { name: "John" };

let array = [john];

// john = null;

console.log(john);

let weakMap = new WeakMap();

weakMap.set(john, "ok");

console.log(weakMap.has(john));

// Destructuring

let options = {
  title: "My menu",
  items: ["Item1", "Item2"],
};

function showMenu({ title = "untitle", height = 144, width = 22, items = [] }) {
  //make sure to add "{}" before destructuring an object inside a function parameter
  console.log(title);
  console.log(height);
  console.log(width);
  console.log(items);
}

showMenu(options);

let user = { name: "John", years: 30 };

let { name, years: age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

function random(min, max) {
  return min + Math.random() * (max - min);
}

// console.log(random(1, 5));
// console.log(random(1, 5));
// console.log(random(1, 5));

function randomInteger(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));

function capFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

console.log(capFirst("john"));

function turnicate(str, maxlength) {
  if (str.length >= maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  } else return str;
}
console.log(turnicate("What I'd like to tell on this topic is:", 20));

console.log(turnicate("Hi everyone!", 20));
console.log(turnicate("1234567890123456789012345", 20));
console.log(turnicate("Short", 10));

function extractCurrencyValue(str) {
  let num = str.slice(1);
  return +num;
}

console.log(extractCurrencyValue("$120"));

const styles = ["Zazz", "Blues"];

styles.push("Rock-n-Roll");

styles[Math.floor((styles.length - 1) / 2)] = "Classic";

console.log(styles.shift());

styles.push(function () {
  alert(this);
});

console.log(styles);

function getMaxSubSum(arr) {
  let sum = 0;
  let maxSum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
}

function getMaxSubSum2(arr) {
  let currSum = 0;
  let maxSum = 0;

  for (let item of arr) {
    currSum += item;
    maxSum = Math.max(currSum, maxSum);
    if (currSum < 0) currSum = 0;
  }
  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([-1, -2]));

/* usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  let maxSalary = 0;
  let maxName = null;
  for (let [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }
  return maxName;
}

console.log(topSalary(salaries));
