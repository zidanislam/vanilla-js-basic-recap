"use strict";
let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  spouse: null,
};

const json = JSON.stringify(student);

console.log(json);
console.log(student.age);

let user = {
  sayHi() {
    // ignored
    alert("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined, // ignored
  name: "Max",
};

console.log(JSON.stringify(user));

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   participants: [{ name: "John" }, { name: "Alice" }],
//   place: room, // meetup references room
// };

// room.occupiedBy = meetup; // room references meetup

// console.log(JSON.stringify(meetup, ["title", "name", "participants"], "\t"));

let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room, // meetup references room
};

room.occupiedBy = meetup; // room references meetup

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    // console.log(`${key}: ${value}`);
    return key == "occupiedBy" ? undefined : value;
  })
);

let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

console.log(numbers[1]);

let number = {
  point: 22,
  toJSON() {
    return this.point;
  },
};

let play = {
  player: 11,
  team: [{ name: "Super 11" }, { name: "Singles party" }],
  number,
};

console.log(JSON.stringify(play));
console.log(JSON.stringify(number));

let userData =
  '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let users = JSON.parse(userData);

console.log(users);
