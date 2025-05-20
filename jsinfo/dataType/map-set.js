"use strict";

function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [
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

console.log(unique(values));

function aclean(arr) {
  const cleanArr = arr.map((str) => [
    str.toLowerCase().split("").sort().join(""),
    str,
  ]);
  let obj = Object.fromEntries(cleanArr);
  return Object.values(obj);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: keys.push is not a function
keys.push("more");

let map1 = new Map();

map1.set("1", "str1"); // a string key
map1.set(1, "num1"); // a numeric key
map1.set(true, "bool1"); // a boolean key
map1.set(Number, NaN); // a boolean key
map1.forEach((value, key, map) => {
  console.log(map);
});
console.log(map1.get(1)); // 'num1'
console.log(map1.get("1")); // 'str1'
console.log(map1.get(true));
console.log(map1.get(Number));

console.log(map1.size); // 3

let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

console.log(visitsCountMap);

for (let item of map.keys()) {
  console.log(item);
}
for (let item of map.values()) {
  console.log(item);
}
for (let item of map) {
  console.log(item);
}
