// Assignment 1

/* Test Case 1
let num = 9; // "009"

Test Case 2
let num = 20; // "020"

Test Case 3
let num = 110; // "110" */

let num = 20;

if (num >= 100) {
    console.log(num)
} else if (num < 100 && num >= 10) {
    console.log(`0${num}`)
} else {
    console.log(`00${num}`)
}


// Assignment 2

let num1 = 9;
let str = "9";
let str2 = "20";

if (num1 == str) {
    console.log("{num1} Is The Same Value As {str}")    
}
if (num1 == str && typeof num1 !== typeof str) {
    console.log("{num1} Is The Same Value As {str} But Not The Same Type")
}
if (num1 !== str2 || typeof num1 != str2) {
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2}")
}
if (typeof str == typeof str2 && str != str2) {
    console.log("{str} Is The Same Type As {str2} But Not The Same Value")
}
/* Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value" */


// Assignment 3

let num2 = 10;
let num3 = 30;
let num4 = "30";

if (num4 > num2 && typeof num4 !== typeof num2) {
    console.log(`${num4} Is Larger Than ${num2} And Type string Not The Same Type As number`);
} else if (num4 > num2 && num4 == num3 && typeof num4 !== typeof num3) {
    console.log(`${num4} Is Larger Than ${num2} And Value Is The Same As ${num4} And Type string Not The Same Type As number`)
} else if (num4 !== num2 && typeof num4 !== typeof num3) {
    console.log(`${num4} Value And Type Is Not The Same As ${num2} And Type Is Not The Same As ${num3}`)
}
/* Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num4} Value And Type Is Not The Same As {num2} And Type Is Not The Same As {num3}" */


// Assignment 4

// Edit What You Want Here

let num5 = 20;
let num6 = 1;
let num7 = 20;
let num8 = 60;

// Condition 1

if (num5 > num6) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num5 > num6 && num5 < num8) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num5 > num6 && num5 === num7) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num5 + num6) < num8) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num5 + num7) < num8) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num5 + num6 + num7) < num8) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num8 - (num5 + num7) + num6 === 21) {
  console.log("True");
} else {
  console.log("False");
}