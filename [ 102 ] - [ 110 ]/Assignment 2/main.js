let popUp = document.getElementById("pop")
let btn = document.getElementById("close");

setTimeout(function (){
    popUp.style.display = "block"
}, 5000);

btn.onclick = function () {
    btn.parentElement.style.display = "none"
};