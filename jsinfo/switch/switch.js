"use strict"

let browser;
if(browser === "Edge"){
    console.log("You've got the Edge!")
}else if(browser === "Chrome" ||
    browser === "Firefox" ||
    browser === "Safari" ||
    browser === "Opera"
){
    console.log("Okay we support these browsers too");
} else { console.log("We hope that this page looks ok!");}

// task-2

let a = +prompt('a?', '');

// if (a == 0) {
//     alert(0);
// }
// if (a == 1) {
//     alert(1);
// }

// if (a == 2 || a == 3) {
//     alert('2,3');
// }
switch(a){
    case 0: 
    console.log(0);
    break;
    case 1: 
    console.log(1);
    break;
    case 2:
    case 3:
        console.log("2,3");
        break;
}