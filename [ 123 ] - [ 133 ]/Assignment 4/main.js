let theNumber = 100020003000;

// Way one
console.log(Number([...new Set(theNumber.toString().split("0"))].join("")))

// Way Two
console.log(+Array.from(new Set([...theNumber.toString()])).sort().join(""))

// Needed Output => 123