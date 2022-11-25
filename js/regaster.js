let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let regasterBtn = document.querySelector("#sign-up");

regasterBtn.addEventListener("click" , regaster)

function regaster(e) {
    e.preventDefault();
    if(username.value === "" || email.value === "" || password.value === "") {
        alert ("Plass Enter Data");
    }else {
        localStorage.setItem("username" , username.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" , password.value);
       
        setTimeout(() => {
            window.location = "login.html"
        }, 1500)
    }
}