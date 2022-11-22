// Deleting paragraph
let del = document.getElementsByTagName("p")[0];
del.remove();

// Adding div before .our-element
let ourElement = document.getElementsByClassName("our-element")[0];
let divBefore = document.createElement("div");
divBefore.className = "start";
divBefore.setAttribute("title", "Start Element");
divBefore.setAttribute("data-value", "Start");
divBefore.textContent = "Start";
ourElement.before(divBefore)

// Adding div after .our-element
let divAfter = document.createElement("div")
divAfter.className = "end";
divAfter.setAttribute("title", "End Element");
divAfter.setAttribute("data-value", "End");
divAfter.textContent = "End";
ourElement.after(divAfter)