let classAdd = document.querySelector(".classes-to-add");
let classRemove = document.querySelector(".classes-to-remove");
let currentEle = document.querySelector('[title="Current"]');
let classesDiv = document.querySelector(".classes-list div");

/*
// Way 1
classAdd.onblur = function () {
    let addValue = classAdd.value.toLowerCase();
    if (addValue !== "") {
        addValue.split(" ").map(ele => {
            let newEle = document.createElement("span");
            newEle.className = ele;
            newEle.textContent = ele;
            currentEle.classList.add(ele);
            classesDiv.appendChild(newEle);
        });
    };
    this.value = "";
};

classRemove.onblur = function () {
    let removeValue = classRemove.value.toLowerCase();
    if (removeValue !== "") {
        document.querySelectorAll("span").forEach(el => {
            removeValue.split(" ").map(ele => {
                if (el.className === ele) {
                    el.remove();
                    currentEle.classList.remove(ele);
                };
            });
        });
    };
    this.value = "";
};
 */



// Way 2
function addOrRemove() {
    document.querySelectorAll("span").forEach(ele => ele.remove());
    for (let i = 0; i < this.value.trim().split(" ").length; i++){
        if (classAdd.value) {
            currentEle.classList.add(classAdd.value.toLowerCase().trim().split(" ")[i])
        }
        if (classRemove.value) {
            currentEle.classList.remove(classRemove.value.toLowerCase().trim().split(" ")[i])
        }
        this.value = "";

        if (currentEle.classList.length) {
            [...currentEle.classList].sort().forEach(ele => {
                let spans = document.createElement("span");
                spans.textContent = ele;
                classesDiv.appendChild(spans);
            });
        } else {
            classesDiv.textContent = "No classes to show";
        }
    }
}

classAdd.onblur = addOrRemove;
classRemove.onblur = addOrRemove;