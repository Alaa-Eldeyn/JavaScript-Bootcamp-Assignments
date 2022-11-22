// Assignment 1 => تحدى

// Replace ? With Arithmetic Operators
console.log(10 * 20 - (15 % 3) + 190 + 10 - 400); // 0


// Assignment 2

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * num - num); // 6

// Solution Three
console.log(num * (num - true)); // 6

// Solution Four
console.log(num * --num); // 6

// Solution Five
console.log(num++*num); // 6

// Solution Six
console.log((typeof num).length); // 6


// Assignment 3

let numTwo = "10";

// Solution One
console.log(+numTwo + +numTwo); // 20

// Solution Two
console.log(+numTwo *(+true + +true)); // 20

// Solution Three
console.log(+numTwo + --numTwo + --numTwo - --numTwo); // 20

// Solution Four
console.log(+numTwo + +numTwo + --numTwo); // 20


// Assignment 3

let points = 10;

// Write Your Code Here
points += ++points.toString().length
console.log(points); // 13

// Write Your Code Here

points -= ++points.toString().length + true + true
console.log(points); // 8;