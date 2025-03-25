"use strict";

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (a <= val || val <= b) {
      arr.splice(i, 1);
    }
  }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
console.log(arr);

function copySorted(array) {
  return array.slice().sort();
}

let array = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(array);

console.log(sorted); // CSS, HTML, JavaScript
console.log(array);

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

function unique(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(strings));

// Create an extendable calculator
// Shuffle an array
// Create keyed object from array
