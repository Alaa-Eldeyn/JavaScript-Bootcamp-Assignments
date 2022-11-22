let theName = "Elzero";

// Way 1
console.log(Array.from(theName));

// Way 2
console.log([...theName]);

// Way 3
console.log(theName.split(""));

// Way 4
console.log([...new Set(theName)]);

// Way 5
console.log(Array.prototype.slice.call(theName));

// Way 6
console.log(Object.assign([], theName));

// Way 7
console.log(Object.values(theName));

// Needed Output => ['E', 'l', 'z', 'e', 'r', 'o']