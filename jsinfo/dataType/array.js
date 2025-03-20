// const frutes = ["Banana", "Orange", "Apple", "Mango"];

// text = "<ol>";
// for (let i = 0; i < fruits.length; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ol>";

// console.log(Array.isArray(fruits));
// console.log(frutes instanceof Array);

// const fruit = ["Banana", "Orange", "Apple", "Mango"];

// let text = "<ul>";
// fruit.forEach(myFunction);
// text += "</ul>";
// document.getElementById("sec").innerHTML = text;
// function myFunction(value) {
//   text += "<li>" + value + "</li>";
// }

const fruits = [
  "apple",
  "banana",
  "Kiwi",
  "cherry",
  "mango",
  "black berry",
  "straw berry",
  "mellon",
];
console.log(fruits);
fruits[fruits.indexOf("Kiwi")] = "Orange";

console.log(fruits);

// array in depth in the data type

let arr = [
  "Apple",
  { name: "John" },
  true,
  function () {
    alert("hello");
  },
];

console.log(arr.at(1).name);

// get the last element
console.log(fruits[fruits.length - 1]);
// or
console.log(fruits.at(-1));

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");

styles[Math.floor((styles.length - 1) / 2)] = "classic";
styles.shift();
styles.unshift("Rap", "Reggae");
console.log(styles);

let arr2 = ["a", "b"];

arr2.push(function () {
  console.log(this);
});

arr2[2]();

function sumInput() {
  let arr = [];

  while (true) {
    let value = prompt("Enter a number please", 0);
    if (value === "" || value === null || !isFinite(value)) break;
    else arr.push(+value);
  }
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

sumInput();

function getMaxSubSum(arr) {
  let maxSum = 0;
  let pertialSum = 0;
  for (let num of arr) {
    pertialSum += num;
    maxSum = Math.max(maxSum, pertialSum);
    if (pertialSum < 0) pertialSum = 0;
  }
  return maxSum;
}

getMaxSubSum([2, -1, 2, 3, -9]);
