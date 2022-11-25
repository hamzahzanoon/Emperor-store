let userInfo = document.querySelector("#user_info");
let user = document.querySelector("#user");
let links = document.querySelector("#links");
let logoutBtn = document.querySelector("#logout");

let username = localStorage.getItem("username");
if(username) {
    userInfo.style.display = "block";
    links.style.display = "none";
    user.innerHTML = username;
}

logoutBtn.addEventListener("click" , function() {
    localStorage.clear();

    setTimeout(() => {
        window.location = "regaster.html"
    }, 1500)
})