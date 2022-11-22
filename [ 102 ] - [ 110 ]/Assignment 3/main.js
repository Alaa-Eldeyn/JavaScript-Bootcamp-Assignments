let myDiv = document.querySelector("div");

function countDown() {
    myDiv.textContent -= 1;

    if (myDiv.textContent == "0") {
        clearInterval(counter);
    };

};

let counter = setInterval(countDown, 500)