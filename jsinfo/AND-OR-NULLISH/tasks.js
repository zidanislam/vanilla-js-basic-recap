// task-16
// alert(null || 2 && 3 || 4); // 3

// task-17

// if (age <= 18 && age >= 90) { }

// task-18

// if (!(age >= 14 && age <= 90)) { }

// if (age < 14 && age > 90) { }

// task-19
let loginAlert = prompt("Who's there?", "");

if (loginAlert == "Admin") {
    let password = prompt("Password please", "");
    if (password == "TheMaster") {
        alert("Welcome!")
    } else if (password == " " || password == null) {
        alert("Canceled")
    } else {
        alert("Wrong password")
    }
} else if (loginAlert == " " || loginAlert == null) {
    alert("Canceled")
} else { alert("I don’t know you") }  