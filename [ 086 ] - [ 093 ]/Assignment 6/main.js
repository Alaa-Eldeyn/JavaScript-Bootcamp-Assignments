let number = document.querySelector("[type='number']");
let boxText = document.querySelector("[type='text']");
let boxType = document.querySelector("[name='type']");
let result = document.querySelector(".results");

document.forms[0].onsubmit = (e) => {
    e.preventDefault();
    document.querySelectorAll(".box").forEach(el => el.remove())
    if (number.value !== "" && boxText.value !== "") {
        for (i = 1; i <= number.value; i++){
            myElement = document.createElement(boxType.value);
            myText = document.createTextNode(boxText.value);

            // Adding attributes to box element
            myElement.className = "box";
            myElement.setAttribute("title", "Element");
            myElement.setAttribute("id", `id-${i}`);

            // Adding styles to box element
            myElement.style.padding = "10px";
            myElement.style.color = "white";
            myElement.style.backgroundColor = "#9b1bad";
            myElement.style.minWidth = "200px"
            myElement.style.maxWidth = "1fr"
            myElement.style.flexGrow = "1";
            myElement.style.borderRadius = "5px";
            myElement.style.textAlign = "center";

            // Adding element to document
            myElement.appendChild(myText);
            result.appendChild(myElement);
        }
    } else {
        window.alert("fill all fields, please")
    }
}