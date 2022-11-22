let myReq = new XMLHttpRequest();
myReq.open("GET", "articles.json");
myReq.send();
myReq.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
    }
};
myReq.onloadend = function () {
    console.log("Data Loaded");
};


/* Needed Output

"JSON Object Content Here"
"Data Loaded"

*/