let promptNum = prompt("Print Number From - T0 ", "Example: 5-20");
let nums = promptNum.split('-').sort((a, b) => a - b);


for (let i = Number(nums[0]); i <= Number(nums[1]); i++){
    let container = document.createElement("div");
    container.textContent = i;
    document.body.append(container);
};
