"use strict";

// CONCAT
const numArr = [1, 2];
const newNumArr = numArr.concat(3, [5, 6, 7, 8], 4);
newNumArr.sort();

console.log(newNumArr);

const array = ["I", "am", "a", "web", "developer"];

array[2] = "becoming";

// SPLICE

array.splice(3, 0, "a");
console.log(array);

let users = [
  { id: 1, name: "John" },
  { id: 3, name: "John" },
  { id: 2, name: "Pete" },
  { id: 21, name: "Pete" },
  { id: 13, name: "Mary" },
  { id: 43, name: "Mary" },
  { id: 4, name: "John" },
];

// FIND/FINDINDEX/FINDLASTINDEX
let user = users.find((item) => item.name == "John");
console.log(`result from find ${user}`);
let firstUser = users.findIndex(
  (item) => item.name.toLocaleLowerCase() == "john".toLocaleLowerCase()
);
console.log(`result from findIndex ${firstUser}`);
let lastUser = users.findLastIndex(
  (item) => item.name.toLocaleLowerCase() == "John".toLocaleLowerCase()
);
console.log(`result from findLastIndex ${lastUser}`);

// FILTER
let name = users.filter(
  (user) => user.name.toLocaleLowerCase() == "John".toLocaleLowerCase()
);
console.log(name);

// MAP
let mappedUser = users.map((user) => user.name + " dances");
console.log(`testing map ${mappedUser}`);

// SORT + LOCALCOMPARE
users.sort((a, b) => a.id - b.id);
console.log(users);
users.sort((a, b) => b.id - a.id);
console.log(users);

let arrNumber = [1, 3, -5, 4, 2];

arrNumber.sort((a, b) => a - b);
console.log(arrNumber);

let countries = ["Österreich", "Andorra", "Vietnam"];
countries.sort((a, b) => a.localeCompare(b));
console.log(countries);

// SPLIT + JOIN
function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}
console.log(camelize("background-color"));

// REDUCE
const grouppedUser = users.reduce((allUser, user) => {
  const name = user.name;
  if (allUser[name] == null) {
    allUser[name] = [];
  }
  allUser[name].push(user.id);
  return allUser;
}, {});
console.log(grouppedUser);

let totalVal = arrNumber.reduce((sum, current) => sum + current);
console.log(totalVal);
console.log(Array.isArray(totalVal));
console.log(Array.isArray(arrNumber));

// thisArg
let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  },
};

let armyCandidates = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

let soldiers = armyCandidates.filter(army.canJoin, army);

console.log(soldiers);

function copySorted(str) {
  let sortedStr = str.slice().sort();
  return sortedStr;
}

let arrText = ["HTML", "JavaScript", "CSS"];

let sorted2 = copySorted(arrText);

console.log(sorted2); // CSS, HTML, JavaScript
console.log(arrText);

let userList = ["John", "John", "Pete", "Pete", "Mary", "Mary", "John"];

let uniqueArray = [...new Set(userList)];
console.log(uniqueArray);

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

function sortByAge(users) {
  return (
    users.map((user) => user.age).reduce((acc, num) => acc + num, 0) /
    users.length
  );
}
let arr2 = [pete, john, mary];
console.log(sortByAge(arr2));
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (a <= val || val <= b) {
      arr.splice(i, 1);
    }
  }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
console.log(arr);

function copySorted2(array) {
  return array.slice().sort();
}

let array2 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted2(array2);

console.log(sorted); // CSS, HTML, JavaScript
console.log(array);
