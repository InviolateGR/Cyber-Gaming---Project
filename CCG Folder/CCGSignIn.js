
//for preloader
const loader = document.getElementById("preLoader");
window.addEventListener("load", function(){
    loader.style.display= "none";
})




//for Sign In page

const Uname = document.getElementById("Uname");
const Pword = document.getElementById("Pword");
const CPword = document.getElementById("CPword");


function createButton(){

    if((Pword.value == CPword.value)&&(Uname.value =="player")){
        alert("Welcome Player");
        window.open("CCG_Main.html","_self");
    } 
    else{
        alert("Invalid Credentials");
    }

}