const frutes = ["Banana", "Orange", "Apple", "Mango"];

text = "<ol>";
for (let i = 0; i < fruits.length; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ol>";

console.log(Array.isArray(fruits));
console.log(frutes instanceof Array);

const fruit = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruit.forEach(myFunction);
text += "</ul>";
document.getElementById("sec").innerHTML = text;
function myFunction(value) {
  text += "<li>" + value + "</li>";
}

const fruits = [
  "apple",
  "banana",
  "Kiwi",
  "cherry",
  "mango",
  "black berry",
  "straw berry",
  "mellon",
];
console.log(fruits);
fruits[fruits.indexOf("Kiwi")] = "Orange";

console.log(fruits);
