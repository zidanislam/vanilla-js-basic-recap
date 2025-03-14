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

//cloning an object

let user2 = {
  name: "John",
  age: 54,
  height: 5.6,
  weight: 70,
};

let clone = {};

for (let key in user2) {
  clone[key] = user2[key];
}
clone.name = "Max";
clone.canDance = true;
console.log(clone);
// Object.assign();
let permission1 = { canEat: true };
let permission2 = { canDance: false };

Object.assign(clone, permission1, permission2);
console.log(clone);

// Object.assign() clone;

let clone2 = Object.assign({}, clone);
console.log(clone2.name);

// structuredClone

const customer = {
  name: "Leo",
  age: 53,
  size: {
    height: 599,
    width: 344,
  },
};
let cloneCustomer = structuredClone(customer);
cloneCustomer.size.height = 333;
console.log(cloneCustomer.size.height);

//this methods
let user21 = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    console.log(this.name);
  },
};

user21.sayHi();

// use of this in dynamically

let user3 = { name: "John" };
let admin = { name: "Sam" };

function sayHello() {
  console.log(`Hello ${this.name}`);
}

user3.f = sayHello;
admin.f = sayHello;

user3.f();
admin.f();

// tasks

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let user4 = makeUser();

console.log(user4.ref().name);

let calculator = {
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  read() {
    this.a = 2;
    this.b = 3;
  },
};

console.log(calculator.read());
console.log(calculator.sum());
console.log(calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // shows the current step
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();
