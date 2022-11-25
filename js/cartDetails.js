let products = JSON.parse(localStorage.getItem("products"));
let productId = localStorage.getItem("productId");
let itemDom = document.querySelector(".wrapper2");

let productDetails = products.find((item) => item.id == productId);

itemDom.innerHTML = `<div class="left">
    <img src="${productDetails.imgUrl}" alt=""/>
    </div>
    <div class="right">
    <h4>Title : ${productDetails.title}</h4>
    <h6>Price : ${productDetails.price}</h6>
    <h6>ProductDescription : ${productDetails.descvalue}</h6>
    
</div>`