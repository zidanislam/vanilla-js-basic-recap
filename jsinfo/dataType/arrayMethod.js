"use strict";

let arr = ["I", "study", "JavaScript", "right", "now"];

const secondArr = arr.splice(0, 3, "Let's", "Damce");
// arr.splice(0, 3);
console.log(arr);
console.log(secondArr);

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
console.log(name);
