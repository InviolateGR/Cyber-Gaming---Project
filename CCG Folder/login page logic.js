const userName = document.getElementById("Uname");
const password = document.getElementById("Pword");
const login = document.getElementById("nextButton");
const next = document.getElementById("nextButton");
const cancle = document.getElementById("cancleButton");


next.onclick=()=>{
if (userName==null||password==""){
    alert("error");
    return false;
}   else if(password.lenght<6){
    alert("Password must be at least 6 charracterslong");
    return false;
}
alert("welcome "+ userName.value);
}


cancle.onclick=()=>{
    userName.value="";
    password.value="";
}