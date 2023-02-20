
//for preloader
const loader = document.getElementById("preLoader");
window.addEventListener("load", function(){
    loader.style.display= "none";
})


const loginForm = document.getElementById("loginWindow");
const loginButton = document.getElementById("submitButton");
const loginErrorMsg = document.getElementById("login-error-msg");

//for the login form and submit  button
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "player" && password === "password") {
        alert("Welcome "+ username);
        window.open("CCG_Main.html","_parent");
    } 
    else{
        document.getElementById("username").style.boxShadow=("0px 0px 8px 0px rgb(232, 35, 64)");
        document.getElementById("username").style.backgroundColor=("rgba(252, 3, 144,0.05)");
        document.getElementById("password").style.boxShadow=("0px 0px 8px 0px rgb(232, 35, 64)");
        document.getElementById("password").style.backgroundColor=("rgba(252, 3, 144,0.05)");
    }
})

