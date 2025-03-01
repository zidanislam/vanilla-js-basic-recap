"use strict"

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
if (answer == "ECMAScript") {
    alert("You are right");
} else if (answer == "ecmacript") {
    alert("You are right but check the spelling next time");
} else if (answer == "Ecmascript") {
    alert("You are right but check the spelling next time");
} else {
    alert("You don’t know? ECMAScript!")
}

// task-13

let number = prompt("Type a number", 0);

if (number > 0) {
    alert(1)
} else if (number < 0) {
    alert(-1)
} else {
    alert(0)
}

// task-14

let result;
(a + b < 4) ? result = "Below" : result = "Over";

// task-15
let messages = (login == 'Employee') ?
    'Hello' :
    (login == 'Director') ?
        'Greetings' :
        (login == '') ?
            'No login' :
            '';