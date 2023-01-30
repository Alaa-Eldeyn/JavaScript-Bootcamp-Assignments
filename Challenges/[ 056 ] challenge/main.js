let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let showCount = 3

document.write(`<div>We Have <span>${showCount}</span> Admins</div>`);
document.write(`<hr>`);

for (i = 0; i <= showCount; i++){
    if (myAdmins[i] === "Stop" || myAdmins[i] === "stop") break;
    document.write(`<div>`);
    document.write(`<p><strong>The Admin For Team <span>${i + 1}</span> is ${myAdmins[i]}</strong></p>`);
    document.write(`<h3>Team members:</h3>`);
    let counter = 1;
    for (j = 0; j < myEmployees.length; j++){
        if (myEmployees[j][0] == myAdmins[i][0]) {
            document.write(`<p>${counter++}- ${myEmployees[j]}</p>`)
        }
    }
    counter = 1
    document.write(`</div>`);
    document.write(`<hr>`);
}
