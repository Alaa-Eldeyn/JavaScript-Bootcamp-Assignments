let myList = document.querySelectorAll("ul li");
let finalColor = document.querySelector(".experiment")

if (window.localStorage.getItem("color")) {
    finalColor.style.backgroundColor = window.localStorage.getItem("color");
    myList.forEach(li => {
        li.classList.remove("active");
    });
    document.querySelector(`[data-color='${window.localStorage.getItem("color")}']`).classList.add("active");
};


myList.forEach(li => {
    li.addEventListener("click", el => {
        myList.forEach(li => {
            li.classList.remove("active");
        });
        el.currentTarget.classList.add("active");
        window.localStorage.setItem("color", el.currentTarget.dataset.color);

        finalColor.style.backgroundColor = window.localStorage.getItem("color");
    });
});