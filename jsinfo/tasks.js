"use strict"

// task-1
alert("I'm JavaScript");

// task-3
let admin;
let names;
names = "John";
admin = names;

alert(admin)

// task-4

const ourPlanet = "Earth";
let currentUserName = "John";

//task-5

let name = "Ilya";

alert(`hello ${1}`); // Hello 1

alert(`hello ${"name"}`); // Hello name

alert(`hello ${name}`); // Hello Ilya

// task-6

let currentVisitorName = prompt("What is your name", "John");
alert(`Your name is ${currentUserName}`);

// task-7

let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1
// a = 2
// b = 2

// task-8

let test_a = 2;

let x = 1 + (test_a *= 2); // test_a = 4 b = 5

// task-9

"" + 1 + 0 // "10"
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // "  -9  5"
"  -9  " - 5 // -14
null + 1 // 1 (null becomes 0 after the numeric conversion.)
undefined + 1 // NaN (undefined becomes NaN after the numeric conversion.)
" \t \n" - 2 // -2 (Space characters are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0.)

//task-10

let task_a = prompt("First number?", 1);
let task_b = prompt("Second number?", 2);

alert(+task_a + +task_b); // 3

// task-11
5 > 4 //true
"apple" > "pineapple" //false
"2" > "12" //true
undefined == null //true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false

// if & conditional operation

let age = prompt("How old are you?", "");
let message = (age < 3) ? "Hi baby" :
 (age < 18) ? "Greetings" : 
 (age < 90) ? "Hello" : "What an unusual age!";

 alert(message);

//  task-12

let answer = prompt("What is the “official” name of JavaScript?", "");
if (answer == "ECMAScript"){
    alert("You are right");
} else if(answer == "ecmacript") {
    alert("You are right but check the spelling next time");
} else if(answer == "Ecmascript") {
    alert("You are right but check the spelling next time");
}else {
    alert("You don’t know? ECMAScript!")
}

// task-13

let number = prompt("Type a number", 0);

if (number > 0) {
    alert(1)
} else if(number < 0){
    alert(-1)
}else{
    alert(0)
}

// task-14

let result; 
(a+b <4) ? result = "Below" : result = "Over";

// task-15
let messages = (login == 'Employee') ? 
    'Hello' :
(login == 'Director') ?
    'Greetings' :
(login == '') ?
    'No login' : 
    '';

// task-16
alert(null || 2 && 3 || 4); // 3

// task-17

if (age <= 18 && age >= 90){}

// task-18

if (!(age >= 14 && age <= 90)){}

if (age < 14 && age > 90){}

// task-19
let loginAlert = prompt("Who's there?", "");

if (loginAlert == "Admin"){
    let password = prompt("Password please", "");
    if (password == "TheMaster"){
        alert("Welcome!")
    } else if (password == " " || password == null){
        alert("Canceled")
    } else {
        alert("Wrong password")
    }
} else if ( loginAlert == " " || loginAlert == null){
    alert("Canceled")
} else {alert("I don’t know you")}  

// example-1
let sum = 0;

while (true) {

    let value = +prompt("Enter a number", '');

    if (!value) break; // (*)

    sum += value;

}
alert('Sum: ' + sum);