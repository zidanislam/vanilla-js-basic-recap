"use strict";

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMessages = new WeakSet();

// two messages have been read
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages has 2 elements

// ...let's read the first message again!
readMessages.add(messages[0]);
// readMessages still has 2 unique elements

// answer: was the message[0] read?
console.log("Read message 0: " + readMessages.has(messages[0])); // true

messages.shift();

// task-2

const readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));

let name = "john";

let array = [name];

name = null;
console.log(array);

let john = { name: "John" };

let map = new WeakMap();
map.set(john, "...");

john = null;

console.log(map.get(john));
