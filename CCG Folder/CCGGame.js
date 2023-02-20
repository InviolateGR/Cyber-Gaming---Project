//for preloader
const loader = document.getElementById("preLoader");
window.addEventListener("load", function(){
    loader.style.display= "none";
})

//functions for the header buttons 
const redirectBtn = document.getElementById("home_button");

redirectBtn.onclick=()=>{
    window.open("#","_blank");
}
function homeBtn(){
    window.open("CCG_Main.html","_self");
}
function helpBtn(){
    window.open("CCG_helpCenter.html","_blank");
}


//functions to redirect when each game category is clicked

const cateFPS = document.getElementById("categoryFPS");
const cateRPG = document.getElementById("categoryRPG");
const cateRacing = document.getElementById("categoryRacing");
const cateFighting = document.getElementById("categoryFighting");

cateFPS.addEventListener("click",()=>{
    window.open("google.com","_parent");
})
cateRPG.addEventListener("click",()=>{
    window.open("google.com","_parent");
})
cateRacing.addEventListener("click",()=>{
    window.open("google.com","_parent");
})
cateFighting.addEventListener("click",()=>{
    window.open("google.com","_parent");
})