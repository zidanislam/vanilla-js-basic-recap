"use stric";

let str = "Hi";
let strC = "h" + str[1];
console.log(strC);
console.log(str);

let string = "As sly as a fox, as strong as an ox";
let traget = "as";

let pos = -1;
while ((pos = string.indexOf(traget, pos + 1)) != -1) {
  console.log(pos);
}

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength) + "...";
  } else return str;
}
console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));

function extractCurrencyValue(str) {
  return +str.slice(1);
}
extractCurrencyValue("$120");
