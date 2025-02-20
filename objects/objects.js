const person = {
    name:"John Doe",
    age: 28,
    country: "Italy",
    occupation: "Street Vendor"
}

// console.log(Object.values(person));
// console.log(JSON.stringify(person));
// const stringify = JSON.stringify(person);
// const stringify = Object.values(person);

// document.getElementById("sec").innerHTML = stringify;
let text = "";
for (guy in person){
    text+= person[guy] + ", ";
}
document.getElementById("sec").innerHTML = text;

