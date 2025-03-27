"use strict";

let map1 = new Map();

map1.set("1", "str1"); // a string key
map1.set(1, "num1"); // a numeric key
map1.set(true, "bool1"); // a boolean key
map1.set(Number, NaN); // a boolean key

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

console.log(visitsCountMap.get(john));

let map = new Map([
  [1, "star"],
  [2, "Boss"],
  [true, false],
  [0, "zero"],
  [-0, "negative zero"],
  [NaN, "not a number"],
  [Number(), NaN],
]);

console.log(map.get(true));
console.log(map.get(Number));
console.log(map);

for (let item of map.keys()) {
  console.log(item);
}
for (let item of map.values()) {
  console.log(item);
}
for (let item of map) {
  console.log(item);
}

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
  let map = new Map();
  for (let item of arr) {
    let sorted = item.toLocaleLowerCase().split("").sort().join("");
    // console.log(sorted);
    map.set(sorted, item);
  }
  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));
let keys = Array.from(map.keys());

keys.push("more");
console.log(keys);
