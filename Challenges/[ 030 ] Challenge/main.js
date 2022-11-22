// Numbers from variables Challenge

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Order 1
// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(Math.min(a, b, c, d))); // 2

// Order 2
// Use Variables a + d One Time To Get The Needed Output
console.log(a ** Math.trunc(d)); // 10000

// Order 3
// Get Integer "2" From d Variable With 4 Methods
console.log(parseInt(d)); // 2
console.log(Math.round(d)); // 2
console.log(Math.floor(d)); // 2
console.log(Math.trunc(d)); // 2

// Order 4
// Use Variables b + d To Get This Valus
console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round(Math.trunc(b) / Math.ceil(d))); // 67 => Number

// String Manipulation Challenge

let e = "Elzero Web School";

// Order 1
// Include This Method In Your Solution [slice, charAt]
console.log(e.charAt(2).toUpperCase() + e.slice(3, 6)); // Zero

// Order 2
// 8 H
console.log(e.charAt(e.indexOf("h")).toUpperCase().repeat(8)); // HHHHHHHH

// Order 3
// Return Array
console.log(e.split(" ", 1)); // ["Elzero"]

// Order 4
// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${e.substr(0, 6)} ${e.substr(11, 18)}`); // Elzero School

// Order 5
// Solution Must Be Dynamic Because String May Changes
console.log(e.charAt(0).toLowerCase() + e.slice(1, e.length-1).toUpperCase() + e[e.length-1].toLowerCase()); // eLZERO WEB SCHOOl