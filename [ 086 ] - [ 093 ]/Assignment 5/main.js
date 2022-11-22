for (i = 0; i < document.images.length; i++){
    (document.images[i].hasAttribute("alt"))
        ? document.images[i].alt = "Old"
        : document.images[i].alt = "Elzero New"
}