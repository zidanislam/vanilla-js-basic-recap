"use strict";

const user = {};
user["name"] = "John";
user["surName"] = "Smith";
// console.log(user);
user["name"] = "Pete";
// console.log(user);
delete user.name;

// console.log(user);

let schedule = {};

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";

console.log(isEmpty(schedule));

function isEmpty(obj) {
  for (let prop in obj) {
    return false;
  }
  return true;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;

for (let prop in salaries) {
  sum += salaries[prop];
}
console.log(sum);

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === "number") {
      obj[prop] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu);
