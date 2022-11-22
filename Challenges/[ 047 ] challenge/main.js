let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Order 1
console.log(my.slice(zero,counter + true).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

// Order 2
console.log(my.slice(counter - true, counter + true)); // ["Elham", "Mazero"]

// Order 3
console.log(my[counter - true].slice(zero, counter - true) + my[zero + true].slice(counter - true)); // "Elzero"

// Order 4
console.log(my[zero + true].slice(zero - true - true, zero - true) + my[zero + true].slice(--zero).toUpperCase()); // "rO"