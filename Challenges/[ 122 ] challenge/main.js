/*
  Destructuring
  - Challenge
*/

let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];


showDetails()

function showDetails() {
    let i = chosen - 1;
    let { title: name, age: zAge, available: statue, skills: [, last] } = myFriends[i];
    console.log(`Name: ${name}\nAge: ${zAge}\n${statue == true ? 'Statue: Available' :'Statue: Not Available'}\nLast skill: ${last}`)
    // console.log(`Name: ${name}`);
    // console.log(`Age: ${zAge}`);
    // statue == true
    //     ? console.log(`Statue: Available`)
    //     : console.log(`Statue: Not Available`)
    // console.log(`Last skill: ${last}`);
};