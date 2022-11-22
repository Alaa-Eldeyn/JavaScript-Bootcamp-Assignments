let myDiv = document.querySelector("div");

function countDown() {
    myDiv.textContent -= 1;

    if (myDiv.textContent == "0") {
        location.assign("https://elzero.org/")
    };

};

setInterval(countDown, 500);