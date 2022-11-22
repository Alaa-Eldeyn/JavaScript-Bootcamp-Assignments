let myInput = document.querySelector("form input");
let myResult = document.getElementsByClassName("result")[0];

myInput.oninput = () => {
  let inValue = myInput.value;
  let poundResult = (inValue * 15.6).toFixed(2);
  myResult.innerHTML = `<span>{ ${inValue} }</span> USD Dollar<br>=<br><span>{ ${poundResult} }</span> EGP Pound`
};