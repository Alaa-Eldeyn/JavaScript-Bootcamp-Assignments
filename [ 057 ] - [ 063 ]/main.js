// Assignment 1

function sayHello(theName, theGender) {
    if (theGender == "Male") {
        return `Hello Mr ${theName}`;
    } else if (theGender == "Female") {
        return `Hello Miss ${theName}`;
    } else {
        return theName;
    }
};

console.log(sayHello("Alaa", 'Male'))

/* Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh" 
 */


// Assignment 2

// Way one
function calculate(firstNum, secondNum, operation) {
    if (secondNum === undefined) {
        return `Second number not found`
    }
    if (operation === "add") {
        return firstNum + secondNum;
    } else if (operation === "subtract") {
        return firstNum - secondNum;
    } else if (operation === "multiply") {
        return firstNum * secondNum;
    } else {
        return firstNum + secondNum;
    }
};
console.log(calculate(20,30))

// Way two
function calculate(firstNum, secondNum, operation) {
    if (secondNum === undefined) {
        return `Second number not found`
    }
    switch (operation) {
        case "add":
        default:
            return firstNum + secondNum;
        case "subtract":
            return firstNum - secondNum;
        case "multiply":
            return firstNum * secondNum;
    }
}
console.log(calculate(20,30))

/* Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
 */


// Assignment 3

function ageInTime(theAge) {
    if (theAge < 10 || theAge > 100) {
        return `Age out of range`
    } else {
        return `Months => ${theAge * 12}
Weeks => ${theAge * 48}
Days => ${theAge * 336}
Hours => ${theAge * 8064}
Minutes => ${theAge * 483840}
Seconds => ${theAge * 29030400}`
    }
};

console.log(ageInTime(20))  
/* Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
 */



// Assignment 4 => Challenge (in challenges folder)


// Assignment 5

function createSelectBox(startYear, endYear) {
    document.write(`<select>`)
    for (i = startYear; i <= endYear; i++){
        document.write(`<option value="${i}">${i}</option>`)
    }
    document.write(`</select>`)
}
createSelectBox(2000, 2021);



// Assignment 6

function multiply(...nums) {
    for (j = 0; j < nums.length; j++){
        if (typeof nums[j] === "number") {
            return parseInt(nums[j]) * parseInt(nums[j + 1]);
        } else continue;
    }
};

console.log(multiply(100.5, 10, "B"))

/* multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
 */