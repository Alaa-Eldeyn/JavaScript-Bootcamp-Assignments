// Print date from my birthday

let dateNow = new Date();
let birthday = new Date("2003-7-15");
let age = dateNow - birthday;

console.log(parseInt(age / 1000)); // my age => Seconds
console.log(parseInt(age / 1000 / 60)); // my age => Minutes
console.log(parseInt(age / 1000 / 60 / 60)); // my age => Hours 
console.log(parseInt(age / 1000 / 60 / 60 / 24)); // my age => Days  
console.log(parseInt(age / 1000 / 60 / 60 / 24 / 30)); // my age => Months  
console.log(parseInt(age / 1000 / 60 / 60 / 24 / 30 / 12)); // my age => Years  


// Needed Output

// "610089214 Seconds"
// "10168154 Minutes"
// "169469 Hours"
// "7061 Days"
// "235 Months"
// "19 Years"