let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// Way 1
console.log([...numsOne, ...numsTwo]);

// Way 2
console.log(numsOne.concat(numsTwo));

// Way3
numsOne.push(...numsTwo)
console.log(numsOne);

// Needed Output => [1, 2, 3, 4, 5, 6]