document.body.style.fontFamily = "Tahoma";
document.body.style.margin = "0";

// Create header Section with container
let header = document.createElement("header");
let headerContainer = document.createElement("div");
header.appendChild(headerContainer);


// Append header to body 
document.body.appendChild(header);
// header container style [css Text]
headerContainer.style.cssText = "display: flex; justify-content: space-between; align-items: center; height: 60px; padding: 0 1rem;";

// Create logo div
let logo = document.createElement("div");
let logoText = document.createTextNode("Elzero");

headerContainer.appendChild(logo);
logo.appendChild(logoText);
// logo style [inline]
logo.style.color = "#348AC7";
logo.style.fontWeight = "bold";
logo.style.fontSize = "1.7rem";

// Create nav links (ul)
let ul = document.createElement("ul");
ul.innerHTML = "<li class='li'>Home</li><li class='li'>About</li><li class='li'>Services</li><li class='li'>Contact</li>";
headerContainer.appendChild(ul)
// ul style
ul.style.display = "flex";
ul.style.color = "gray";
ul.style.fontSize = ".9rem";
ul.style.listStyle = 'none';
let lis = document.querySelectorAll(".li");
for (i = 0; i < lis.length; i++){
  lis[i].style.paddingLeft = '1rem';
}

/* ================================================== */

// Create grid container for products
let productsContainer = document.createElement("div");
productsContainer.style.cssText = "display: grid; grid-template-columns: 1fr 1fr 1fr; padding: 15px; gap: 15px; background-color: #eee; height: calc(100vh - 150px)";
// Create products
for (j = 1; j <= 15; j++){
  let product = document.createElement("div");
  product.style.cssText = "display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: white; font-size: 1.7rem;";
  product.innerHTML = `${j}<span style = "font-size: .7rem; color: gray; margin-top: 5px">Product</span>`;
  productsContainer.appendChild(product);
};

// append products section to body after header
header.after(productsContainer)

/* ================================================== */

// Create footer
let footer = document.createElement("footer");
// footer style [inline]
footer.style.backgroundColor = "#348AC7";
footer.style.height = "60px";
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.alignItems = "center";
footer.style.color = "white";
footer.textContent = "Copyright @ 2022 - Alaa Eldeyn"

// Append footer to body after products section
productsContainer.after(footer)