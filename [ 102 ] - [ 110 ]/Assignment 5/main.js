let myDiv = document.querySelector("div");

function countDown() {
    myDiv.textContent -= 1;

    if (myDiv.textContent == "5") {
        window.open("https://Elzero.org", "_blank", "width=500,height=450,left=200",true)
    };

    if (myDiv.textContent == "0") {
        clearInterval(counter);
    };

};

let counter = setInterval(countDown, 500);