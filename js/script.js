// Defind product
let prodctsDom = document.querySelector(".wrapper");
let products = productsDb;

// Display products 
let drawProdctsUI;
(drawProdctsUI = function (products = []) {
    let prodctsUI = products.map((item) => {
        return `<div class="card">
        <img src="${item.imgUrl}" alt="music" title="music">
        <div class="content">
            <div class="row">
                <div class="details">
                    <a onclick="savaItemData(${item.id})">${item.title}</a>
                    <p>${item.descvalue}</p>
                    </div>
                <div class="price">${item.price}</div>
            </div>
            <div class="buttons">
            <button class="cart-btn" onclick="addToCart(${item.id})">Add to Cart</button>
            <button class="cart-btn2"><i class="fa-solid fa-heart"  style="color: ${item.liked == true ? "red" : ""}" onclick="addToFavorite(${item.id})"></i></button>
            </div>
        </div>
    </div>`
    });
    prodctsDom.innerHTML = prodctsUI.join("");
})(JSON.parse(localStorage.getItem("products")) || products); 



// Add To Cart 
function addToCart(id) {
    if(localStorage.getItem("username")) {
        let products = JSON.parse(localStorage.getItem("products")) || productsDb;
        let product = products.find((item) => item.id === id); 
        let isproductIncart = addeItme.some((i) => i.id === product.id);

        if(isproductIncart) {
            addeItme = addeItme.map((p) => {
                if(p.id === product.id) p.qty += 1;
                return p;
            });
        }else {
            addeItme.push(product);
        }
        // UI
        cartsProdctsDom.innerHTML = "";
        addeItme.forEach((item) => {
            cartsProdctsDom.innerHTML += `<p>${item.title} ${item.qty}</p>`
        });

        // Save Data 
        localStorage.setItem("productInCart",JSON.stringify(addeItme))
        // Add Counter of Items
        let cartsProdctsItems = document.querySelectorAll(".carts-prodcts div p");
        badgeDom.style.display = "block";
        badgeDom.innerHTML = cartsProdctsItems.length;
    }else {
        window.location = "login.html"
    }
};


function getUniqueArr(arr , filterType) {
    let unique = arr.map((item) => item[filterType])
    .map((item , i , final) => final.indexOf(item) === i && i)
    .filter((item) => arr[item])
    .map((item) => arr[item]);
}


function savaItemData(id) {
    localStorage.setItem("productId", id);
    window.location = "cartDetails.html";
}


let input = document.querySelector("#saerchs");

input.addEventListener("keyup" , function (e) {
    saerch(e.target.value , JSON.parse(localStorage.getItem("products")))
    
    if(e.target.value.trim() === "")
    drawProdctsUI(JSON.parse(localStorage.getItem("products")))
})

function saerch(title , myArray) {
    let arr = myArray.filter(item => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
    drawProdctsUI(arr) 
};


//Add To favorite 
let favoriteItem = localStorage.getItem("favoriteItem") ? JSON.parse(localStorage.getItem("favoriteItem")) : [];
function addToFavorite(id) {
    if(localStorage.getItem("username")) {
        let products = JSON.parse(localStorage.getItem("products")) || productsDb;
        let choosenItme = products.find((item) => item.id === id); 
        choosenItme.liked = true;
        favoriteItem = [...favoriteItem , choosenItme];
        let uniqueproducts = getUniqueArr(favoriteItem , "id");
        localStorage.setItem("productsFavorite",JSON.stringify(favoriteItem))
        products.map((item) => {
            if(item.id === choosenItme.id) {
                item.liked = true
            }
        })
        localStorage.setItem("products" , JSON.stringify(products));
        drawProdctsUI(products);
    }else {
        window.location = "login.html"
    }
};