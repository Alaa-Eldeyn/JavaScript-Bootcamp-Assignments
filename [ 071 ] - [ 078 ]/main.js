// Assignment 1

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let newMix = mix
    .map((ele) => Number(ele) ? "" : ele)
    .reduce((acc, current) => acc + current );

console.log(newMix); // Elzero


// Assignment 2

let myString = "EElllzzzzzzzeroo";

let newString = myString
    .split("")
    .filter((item, pos, arr) => arr.indexOf(item) == pos)
    .join("");

console.log(newString); // Elzero


// Assignment 3

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArr = myArray
    .reduce((acc, current) => acc.concat(current), [])
    .join('');
console.log(newArr); // Elzero


// Assignment 4

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let newNumsAndStrings = numsAndStrings.filter((ele) => {
    return Number(parseInt(ele))
}).map((ele) => {
    return -ele;
});

console.log(newNumsAndStrings); // [-1, -10, 10, 20, -5, -3]


// Assignment 5

let nums = [2, 12, 11, 5, 10, 1, 99];

let newNums = nums.reduce((acc, current) => {
    if (current % 2 === 0) {
        return acc * current;
    } else {
        return acc + current;
    }
}, 1);

console.log(newNums) // 500