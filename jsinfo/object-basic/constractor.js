"use strict";

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

const id = Symbol("id");
User[id] = 1;
console.log(User[id]);

new User("John");
new User("Jack");
new User("Jamse");

console.log(new User("Jamse"));

function Person(fName, lName, age, eye) {
  this.firstName = fName;
  this.lastName = lName;
  this.age = age;
  this.eyeColor = eye;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

const rakib = new Person("Rakib", "Rahman", 23, "Black");
console.log(rakib.fullName());

function SmallUser() {
  this.name = "John";
  this.age = 34;
  this.lName = "Maxwell";

  return; // <-- returns this
}

console.log(new SmallUser().age);

let obj = { name: "Leo", age: 53 };
function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A();
let b = new B();

console.log(a == b);

function Calculator() {
  this.read = function () {
    this.a = 2; //+prompt("a?", 0);
    this.b = 3; //+prompt("b?", 0);
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}
let calculator = new Calculator();
console.log(calculator.read());

console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt("How much to add?", 0);
  };
}
let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

console.log(accumulator.value);

let user = null;

console.log(user?.address); // undefined
console.log(user?.address.street); // undefined
