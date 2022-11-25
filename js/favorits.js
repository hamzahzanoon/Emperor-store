let prodctsDom = document.querySelector(".wrapper");
let noproducts = document.querySelector(".noproducts");

function drawFavoritsroductsUI(allproducts = []) {
   if(JSON.parse(localStorage.getItem("productsFavorite")).length === 0) {
   }

    let products = JSON.parse(localStorage.getItem("productsFavorite")) || allproducts;
    let prodctsUI = products.map((item) => {
        return `<div class="card">
        <img src="${item.imgUrl}" alt="music" title="music">
        <div class="content">
            <div class="row">
                <div class="details">
                    <span>${item.title}</span>
                    <p>${item.descvalue}</p>
                </div>
                <div class="price">${item.price}</div>
            </div>
            <div class="buttons">
                <button>number : ${item.qty}</button>
                <button class="cart-btn" onclick ="removeItemFavorit(${item.id})">Favorite</button>
            </div>
        </div>
    </div>`
    });
    prodctsDom.innerHTML = prodctsUI.join("");
} 
drawFavoritsroductsUI();


function removeItemFavorit(id) {
    let productsFavorite = localStorage.getItem("productsFavorite");
    if(productsFavorite) {
        let items = JSON.parse(productsFavorite);
        let filteredItems = items.filter((item) => item.id !== id)
        localStorage.setItem("productsFavorite" ,JSON.stringify(filteredItems))
        drawFavoritsroductsUI(filteredItems);
    }
}