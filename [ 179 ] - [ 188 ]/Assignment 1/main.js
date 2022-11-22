const getData = (apiLink) => {
    return new Promise((res, rej) => {
        let myReq = new XMLHttpRequest();
        myReq.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                res(JSON.parse(this.responseText))
            } else {
                rej(Error("Can't reach to api data"))
            }
        }
        myReq.open("Get", apiLink);
        myReq.send();
    });
};

getData("info.json")
    .then((resolved) => {
        resolved.length = 5;
        return resolved;
    }).then((resolved) => {
        for (i = 0; i < resolved.length; i++) {
            let myDiv = document.createElement("div")
            myDiv.innerHTML =
                `<h3>${resolved[i]["title"]}</h3>
                <p>${resolved[i]["description"]}</p>`
            document.body.appendChild(myDiv)
        }
    })
    .catch((rejected) => console.log(rejected))