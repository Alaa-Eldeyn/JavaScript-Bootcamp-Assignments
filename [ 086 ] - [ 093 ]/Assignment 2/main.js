for (i = 0; i < document.images.length; i++){
    let myImgs = document.images[i];
    myImgs.setAttribute("src","https://elzero.org/wp-content/themes/elzero/imgs/logo.png")
    myImgs.setAttribute("alt", "Elzero Logo");
    document.images[i].style.backgroundColor='#0075ff'
};