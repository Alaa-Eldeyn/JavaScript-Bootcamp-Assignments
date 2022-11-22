let myReq = new XMLHttpRequest();
myReq.open("get", "articles.json");
myReq.send();
myReq.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let mainData = JSON.parse(this.responseText);
        for (i = 0; i < mainData.length; i++){
            mainData[i]["article"]["category"] = "All";
        }
        console.log(mainData);
        let updatedData = JSON.stringify(mainData);
        console.log(updatedData);
    }
}

/* mainData Variable Content

0: {id: 1, title: 'Title 1', body: 'Article Number 1 Body', category: 'All', author: 'Ali'}
1: {id: 2, title: 'Title 2', body: 'Article Number 2 Body', category: 'All', author: 'Mahmoud'}
2: {id: 3, title: 'Title 3', body: 'Article Number 3 Body', category: 'All', author: 'Osama'}
3: {id: 4, title: 'Title 4', body: 'Article Number 4 Body', category: 'All', author: 'Sayed'}
4: {id: 5, title: 'Title 5', body: 'Article Number 5 Body', category: 'All', author: 'Ahmed'}

// UpdatedData Variable Content
"JSON Object Content Here"

*/