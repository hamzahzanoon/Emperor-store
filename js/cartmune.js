let badgeDom = document.querySelector(".item-numb");
let cartsProdctsDom = document.querySelector(".carts-prodcts div");

// check If there is items localStorage
let addeItme = localStorage.getItem("productInCart") ? JSON.parse(localStorage.getItem("productInCart")) : [];

if(addeItme) {
    addeItme.map((item) => {
        cartsProdctsDom.innerHTML += `<p>${item.title}</p>`
    });
    badgeDom.style.display = "block";
    badgeDom.innerHTML = addeItme.length;
}