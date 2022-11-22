// Assignment 1
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(10e4); // 100000
console.log(10 * 10e3); // 100000
console.log(1000 * 100); // 100000
console.log(Math.round(100000.22)); // 100000
console.log(Math.ceil(99999.4)); // 100000
console.log(Math.floor(100000.9)); // 100000
console.log(Math.trunc(100000.6)); // 100000
console.log(Math.pow(10,5)); // 100000
console.log(Number(1e5)); // 100000
console.log(parseInt(100000.661648)); // 100000


// Assignment 2
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991


// Assignment 3
console.log((Number.MAX_SAFE_INTEGER).toString().length); // 16


// Assignment 4
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57


// Assignment 5
let num = 10;

console.log(Number.isInteger(num) + true); // 2


// Assignment 6
let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(flt.toFixed(0)); // 10
console.log(Math.ceil(--flt)); // 10


// Assignment 7
console.log(parseInt(Math.random()*4)); // 0 || 1 || 2 || 3 || 4