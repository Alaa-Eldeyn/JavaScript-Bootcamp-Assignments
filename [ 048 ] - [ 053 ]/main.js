// Assignment 1

let startOne = 10;
let endOne = 100;
let exclude = 40;

for (i = startOne; i <= endOne; i += startOne){
    if (i == exclude) {
        continue;
    }
    console.log(i);
}

/* Output
10
20
30
50
60
70
80
90
100
*/


// Assignment 2

let startTwo = 10;
let endTwo = 0;
let stop = 3;

for (j = startTwo; j > endTwo; j--){
    if (j == stop) {
        break;
    }
    if (j < startTwo) {
        console.log(`0${j}`)
    } else {
        console.log(j)
    }
}

/* Output
10
09
08
07
06
05
04
03
*/


// Assignment 3

let startThree = 1;
let endThree = 6;
let breaker = 2;

for (k = startThree; k <= endThree; k++){
    console.log(k);
    for (l = breaker; l < endThree; l += breaker){
        console.log(`-- ${l}`)
    }
}

/* Output
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4
*/


// Assignment 4

let index = 10;
let jump = 2;
let end = 0;

g = index
for (; ;) {
    if (g === jump) break;
    console.log(g)
    g -= jump
}

// Output
// 10
// 8
// 6
// 4


// Assignment 5

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
counter = +true;

for (m = +false; m < friends.length; m++){
    if (friends[m].startsWith("A")) {
        continue;
    }
    console.log(`${counter} => ${friends[m]}`)
    counter++
}

/* Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
*/


// Assignment 6

let startFour = 0;
let swappedName = "elZerO";
// swappedName.split("");
newName = [];
// console.log(swappedName)

for (n = startFour; n < swappedName.length; n++){
    if (swappedName[n] === swappedName[n].toLowerCase()) {
        newName += swappedName[n].toUpperCase()
    } else if(swappedName[n] === swappedName[n].toUpperCase()){
        newName += swappedName[n].toLowerCase()
    }
}
console.log(newName);

// Output
// "ELzERo"


// Assignment 7

let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (t = start; t < mix.length; t++){
    if (typeof mix[t] === "string" || mix[t] === 1) continue;
    console.log(mix[t]);
}

/* Output
2
3
4
*/