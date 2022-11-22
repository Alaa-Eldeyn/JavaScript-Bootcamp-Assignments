// Condition Met Challenge

// Challenge 1

let a = 10;
/*
    if (a < 10) {
        console.log(10);
    } else if (a >= 10 && a <= 40) {
        console.log("10 To 40");
    } else if (a > 40) {
        console.log("> 40");
    } else {
        console.log("Unknown");
    }
*/

(a < 10)
    ? console.log(10)
    : (a >= 10 && a <= 40)
    ? console.log("10 To 40")
    : (a > 40)
    ? console.log("> 40")
    : console.log("Unknown")


// Challenge 2

let st = "Elzero Web School";

// Order 1
if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
    console.log("Good");
}

// Order 2
if (! typeof(st) !== "string") {
    console.log("Good");
}

// Order 3
if (typeof (st.length) === "number") {
    console.log("Good");
}

// Order 4
if ((st.slice(0,6).repeat(2)) === "ElzeroElzero") {
    console.log("Good");
}