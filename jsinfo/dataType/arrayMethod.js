"use strict";

// let arr = ["I", "study", "JavaScript", "right", "now"];

// const secondArr = arr.splice(0, 3, "Let's", "Damce");
// // arr.splice(0, 3);
// console.log(arr);
// console.log(secondArr);

const numArr = [1, 2];
const newNumArr = numArr.concat(3, [5, 6, 7, 8], 4);
newNumArr.sort();

console.log(newNumArr);

const array = ["I", "am", "a", "web", "developer"];

array[2] = "becoming";
array.splice(3, 0, "a");
console.log(array);

let users = [
  { id: 1, name: "John" },
  { id: 3, name: "John" },
  { id: 2, name: "Pete" },
  { id: 21, name: "Pete" },
  { id: 13, name: "Mary" },
  { id: 43, name: "Mary" },
  { id: 4, name: "John" },
];

let user = users.find((item) => item.name == "John");
let firstUser = users.findIndex(
  (item) => item.name.toLocaleLowerCase() == "john".toLocaleLowerCase()
);
let lastUser = users.findLastIndex(
  (item) => item.name.toLocaleLowerCase() == "John".toLocaleLowerCase()
);
let name = users.filter(
  (user) => user.name.toLocaleLowerCase() == "John".toLocaleLowerCase()
);
users.sort((a, b) => a.id - b.id);
users.sort((a, b) => b.id - a.id);

console.log(users);
let arrNumber = [1, 2, 3, 4, 5];

let totalVal = arrNumber.reduce((sum, current) => sum + current);
console.log(totalVal);
console.log(Array.isArray(totalVal));
console.log(Array.isArray(arrNumber));

function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

console.log(camelize("background-color"));

function filterRangeInPlace(arr, a, b) {
  arr.forEach((i) => a <= i <= b);
  return arr;
}
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log(arr);

function copySorted(str) {
  let sortedStr = str.slice().sort();
  return sortedStr;
}

let arrText = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arrText);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arrText);
