let username = document.querySelector("#usrename");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#sign-in");

let getusre = localStorage.getItem("username");
let getpassword = localStorage.getItem("password");

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if(username.value === "" || password.value === "") {
        alert ("Plass Enter Data");
    }else {
    if((getusre && getusre.trim() === username.value) && (getpassword && getpassword === password.value)) {

        setTimeout(() => {
            window.location = "index.html";
        })
    }    
    }
})