// Way One

fetch("info.json")
    .then((result) => {
        return result.json();
    }).then((res) => {
        res.length = 5;
        return res;
    }).then((res) => {
        for (i = 0; i < res.length; i++) {
            let myDiv = document.createElement("div");
            myDiv.innerHTML = `<h3>${res[i]["title"]}</h3><p>${res[i]["description"]}</p>`;
            document.body.appendChild(myDiv)
        }
    });

/* 

// Way Two

async function getData(apiLink) {
    try {
        let myInfo = await fetch(apiLink);
        let myData = await myInfo.json();
        myData.length = 5;
        for (i = 0; i < myData.length; i++){
            let myDiv = document.createElement("div");
            document.body.appendChild(myDiv);
            
            let myHeading = document.createElement("h3");
            myHeading.textContent = myData[i]["title"]
            myDiv.appendChild(myHeading)

            let myP = document.createElement("p");
            myP.textContent = myData[i]["description"]
            myDiv.appendChild(myP)

        }
    }
    catch (error) {
        document.body.appendChild(document.createTextNode(error))
    }
}

getData("info.json")

*/