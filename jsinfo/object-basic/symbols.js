"use strict";

const id = Symbol("id from symbol");
const id2 = Symbol("id");
const name = "Name";

// console.log(name);

// console.log(id.description);

let user = {
  name: "John",
  [id]: 113, // not "id": 123
};

console.log(typeof id);
// console.log(user);

// let clone = Object.assign({}, user);

// console.log(clone[id]);

const obj = {
  name: "Boss",
  age: 20,
};
const obj2 = {
  name: "Dog",
};
const anotherObj = {
  age: 12,
};

// console.log(obj.age < anotherObj.age);

let usersInfo = {
  name: "John",
  salary: 5000,
  age: 28,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `${this.name}` : this.salary;
  },
};

// console.log(`User from console: ${usersInfo}`);
// console.log(+usersInfo + 5000);
// console.log(usersInfo + 2);
