// Adding items
let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size)

console.log(setOfNumbers)


// Print last element (Way 1)
let [, , last] = setOfNumbers;
console.log(last);

// Print last element (Way 2)
console.log(Array.from(setOfNumbers).pop());

// Print last element (Way 3)
console.log([...setOfNumbers][2]);

// Print last element (Way 4)
console.log([...setOfNumbers].length - 1);

// Print last element (Way 5)
console.log(setOfNumbers.size - 1);