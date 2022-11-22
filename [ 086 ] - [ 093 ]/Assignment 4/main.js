let titleOne = document.querySelector(".one").textContent;
let titleTwo = document.querySelector(".two").textContent;

document.querySelector(".one").setAttribute("title", titleTwo.toLowerCase())
document.querySelector(".two").setAttribute("title", titleOne.toLowerCase())

document.querySelector(".one").textContent = titleTwo;
document.querySelector(".two").textContent = `${ titleOne } ${document.getElementById("main").children.length}`;