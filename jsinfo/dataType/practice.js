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

let map = new Map([
  [1, "star"],
  [2, "Boss"],
  [true, false],
  [0, "zero"],
  [-0, "negative zero"],
  [NaN, "not a number"],
  [Number(), NaN],
]);
// let map = new Map();

// map.set("name", "John");

let keys = Array.from(map.keys());

// Error: keys.push is not a function
keys.push("more");
console.log(keys);
