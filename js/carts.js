let prodctsDom = document.querySelector(".wrapper");
let noproducts = document.querySelector(".noproducts");


function drawCartProductsUI(allproducts = []) {
   if(JSON.parse(localStorage.getItem("productInCart")).length === 0) {
        noproducts.innerHTML = "Thre is no items !!"
   }

    let products = JSON.parse(localStorage.getItem("productInCart")) || allproducts;
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
                <button class="cart-btn" onclick="removeCart(${item.id})">Remove Cart</button>
            </div>
        </div>
    </div>`
    });
    prodctsDom.innerHTML = prodctsUI.join("");
} 
drawCartProductsUI();


function removeCart(id) {
    let productInCart = localStorage.getItem("productInCart");
    if(productInCart) {
        let items = JSON.parse(productInCart);
        let filteredItems = items.filter((item) => item.id !== id)
        localStorage.setItem("productInCart" ,JSON.stringify(filteredItems))
        drawCartProductsUI(filteredItems);
    }
}