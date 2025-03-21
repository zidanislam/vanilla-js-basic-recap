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
