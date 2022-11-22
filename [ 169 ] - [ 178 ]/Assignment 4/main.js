let myReq = new XMLHttpRequest();
myReq.open("get", "articles.json");
myReq.send();
myReq.onreadystatechange = function () {
  if (this.status === 200 && this.readyState === 4) {
    let mainData = JSON.parse(this.responseText);
    let mainDiv = document.createElement("div");
    mainDiv.id = "data";
    document.body.appendChild(mainDiv)
    for (let i = 0; i < mainData.length; i++){
      let myDiv = document.createElement("div");
      myDiv.innerHTML =
      `<h2>${mainData[i]["article"]["title"]} ${mainData[i]["id"]}</h2>
      <p>Author: ${mainData[i]["author"]}</p>      
      <p>Id: ${mainData[i]["id"]}</p>      
      <p>Category: ${mainData[i]["article"]["category"]}</p>  `;
      mainDiv.appendChild(myDiv)
    }
  }
}
