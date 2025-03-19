"use strict";

const user = {
  name: "John",
  sayHi: function () {
    return console.log(`hi ${this.name}`);
  },
};
user.sayHi();
