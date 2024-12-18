// const nan = NaN;
// console.log(typeof(nan));

// const n1 = "5";
// const n2 = 2;
// console.log(n1+n2);
// console.log(n1-n2);
// console.log(n1*n2);
// console.log(n1/n2);
// console.log(n1%n2);

const str = "b" + "a" + + "a" + "a";

console.log(str.toUpperCase());

// "b" + "a":

// This simply concatenates "b" and "a" to form "ba".
// + "a":

// The + "a" is a little trickier. Here, the + operator is used as a unary operator, attempting to convert "a" into a number.
// Since "a" is not a valid number, JavaScript converts it to NaN (Not-a-Number).
// So, + "a" becomes NaN.
// "b" + "a" + NaN + "a":

// Now, the expression is equivalent to "ba" + NaN + "a".
// JavaScript treats NaN as a string in this context, so it concatenates "ba", "NaN", and "a", resulting in "baNaNa".
// str.toUpperCase():

// The toUpperCase() method then converts "baNaNa" to "BANANA".

const num = 789.765;
console.log(num.toPrecision(9));

const hex = 0x12ff;
console.log(hex)

console.log(parseInt("10 years"));