// Assignment 1

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(false,num)); // ["Ahmed", "Elham", "Osama"];

// Method 3
myFriends.length = num
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 4
console.log(myFriends.splice(false, num)); // ["Ahmed", "Elham", "Osama"];


// Assignment 2

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift()
friends.pop()

console.log(friends); // ["Eman", "Osama"]


// Assignment 3

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

finalArr = arrTwo.concat(arrOne).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"];


// Assignment 4

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO


// Assignment 5

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
    console.log("Found")
}
if (haystack.indexOf(needle) !== -1) {
    console.log("Found")
}
if (haystack.lastIndexOf(needle) !== -1) {
    console.log("Found")
}


// Assignment 6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = (arr2[arr1.length - true] + arr1[arr1.length - true] + arr2[arr1.length]).toLowerCase()
console.log(allArrs); // fxy