"use strict"

let from = prompt("name", "name");
let text = prompt("message", "message")
function showMessage(from, text) { // parameters: from, text
    alert(from + ': ' + text);
}

showMessage(from, text); // Ann: Hello! (*)

function showMessage2(from, text){
    from = "*" + from + "*";
    console.log(from+":" + text) 
}
let from2 = "Ann";
let text2 = "hello"
showMessage2(from2, text2);

function pow(x,n){
    let result = x;
    for (let i=1; i<n; i++){
        result *= x;
    }
    console.log(result);
    return result;
}

let x = prompt("input the number");
let n = prompt("Input the power");

if(n<1){
    alert(`the value of ${n} is too low`);
}else{
    alert(pow(x,n));
}


// function expression

function sayHi() {
    alert("Hello");
}

let func = sayHi;    
func(); 
sayHi();
// 1
function ask(question, yes, no){
    if(confirm(question))yes();
    else {no()};
}


let showYes = function(){
    alert("you agreed!")
}
let showCancel = function(){
    alert("you Canceled");
}
ask("Do you agree?", showYes, showCancel);

//short form

function ask(question, yes, no){
    confirm(question) ? yes():no();
}
ask("Do you agree?",
    function() {alert("You agreed");},
    function() {alert("You canceled");}
);

//arrow function task

let ask = (question, yes, no)=>{
    confirm(question)? yes() : no()
}

ask("Do you agree",
    ()=> alert("You agreed"),
    ()=> alert("You Cancled")
)