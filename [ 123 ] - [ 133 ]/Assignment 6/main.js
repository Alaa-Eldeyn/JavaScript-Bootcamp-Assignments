let chars = ["A", "B", "C", "D", "E", 10, 15, 6]; // => ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6]; // => ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
// let chars = ["Z", "Y", "A", "D", "E", 10, 1]; // => ["Z", "Y", "Z", "Y", "A", "D", "E"]

// Move numbers top the start of array
for (let i = 0; i < chars.length; i++) {
	if (typeof chars[i] === "number") chars.unshift(...chars.splice(i, 1));
}

// Find index of first letter
let firstLetterIndex = chars.findIndex((ele) => typeof ele === "string");
// console.log(firstLetterIndex)

// Output New Array
chars.copyWithin(0, firstLetterIndex, firstLetterIndex * 2);
console.log(chars);