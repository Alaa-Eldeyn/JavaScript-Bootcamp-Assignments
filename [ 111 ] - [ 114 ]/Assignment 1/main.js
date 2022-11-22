let font = document.getElementById("font");
let color = document.getElementById("color");
let size = document.getElementById("size");
let text = document.querySelector(".text");

window.onload = () => {
    if (localStorage.getItem("fontFamily")) {
        text.style.fontFamily = localStorage.getItem("fontFamily");
        font.value = localStorage.getItem("fontFamily");
    }
    if (localStorage.getItem("color")) {
        text.style.color = localStorage.getItem("color");
        color.value = localStorage.getItem("color");
    }
    if (localStorage.getItem("fontSize")) {
        text.style.fontSize = localStorage.getItem("fontSize");
        size.value = localStorage.getItem("fontSize");
    }
}

font.onchange = function () {
    text.style.fontFamily = font.value;
    localStorage.setItem("fontFamily", font.value);
}
color.onchange = function () {
    text.style.color = color.value;
    localStorage.setItem("color", color.value);
}
size.onchange = function () {
    text.style.fontSize = size.value;
    localStorage.setItem("fontSize", size.value);
}