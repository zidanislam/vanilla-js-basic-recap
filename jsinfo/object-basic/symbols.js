"use strict";

const id = Symbol("id from symbol");
const id2 = Symbol("id");
const name = "Name";

console.log(name);

console.log(id.description);

let user = {
  name: "John",
  [id]: 113, // not "id": 123
};
console.log(user[id]);

let clone = Object.assign({}, user);

console.log(clone[id]);
