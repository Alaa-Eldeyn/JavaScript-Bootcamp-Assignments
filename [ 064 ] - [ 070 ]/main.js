// Assignment 1

function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
      // Write Your Code Here
        zName = zName.trim().split(" ")
        return `${zName[0]} ${zName[1][0].toUpperCase()}.`;
      // Alaa Abdelnaser => Alaa A.
      // Osama Mohamed => Osama M.
    }
    function ageWithMessage(zAge) {
      // Write Your Code Here
        return `Your age is ${parseInt(zAge)}`;
      // 20 Is The Age => Your Age Is 20
      // 38 Is My Age => Your Age Is 38
    }
    function countryTwoLetters(zCountry) {
      // Write Your Code Here
        return `${zCountry.slice(0, 2).toUpperCase()}`;
      // Egypt => You Live In EG
      // Syria => You Live In SY
    }
    function fullDetails() {
      // Write Your Code Here
        return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, You Live In ${countryTwoLetters(zCountry)}`
    }
    return fullDetails(); // Do Not Edit This
  }

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Alaa Abdelnaser", "20 Is The Age", "palestine"));
// Hello Alaa A., Your Age Is 20, You Live In PA



// Assignment 2

let itsMe = () => `Iam An Arrow Function`;
console.log(itsMe()); // Iam A Normal Function

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org


// Assignment 3

checker = (zName) => (status) => (salary) =>
    status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;

console.log(checker("Alaa")("Available")(4000)); // Alaa, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble


// Assignment 4

function specialMix(...data) {
    // Your Code Here
    let result = 0;
    for (let i = 0; i < data.length; i++) {
      if (parseInt(data[i])) result += parseInt(data[i]);
    }
    if (result === 0) return "All is strings";
    return result
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings