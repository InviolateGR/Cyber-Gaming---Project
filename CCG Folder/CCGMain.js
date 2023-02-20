
//for preloader
const loader = document.getElementById("preLoader");
window.addEventListener("load", function(){
    loader.style.display= "none";
})




function login_button(){
    window.open("CCG_login.html", "_blank"); 
}
function joinBtn(){
    window.open("CCG_signIn.html","_blank");
}
function links(){
    window.open("#","_blank");
}
function helpBtn(){
    window.open("CCG_helpCenter.html","_blank");
}
function gameBtn(){
    window.open("CCG_GameSection.html", "_blank");
}



// in the main page 

    //the announcements box on the left

        //for the change of news (whatsnew or Records)
        
        function latestRecordsBtn(){
            var WNBox = document.getElementById("whatsNewBox");
            var LRBox = document.getElementById("latestRecordsBox");    

            WNBox.style.display = "none";
            LRBox.style.display = "block";
        }
        function whatsNewBtn(){
            var WNBox = document.getElementById("whatsNewBox");
            var LRBox = document.getElementById("latestRecordsBox");    

            WNBox.style.display = "block";
            LRBox.style.display = "none";
        }


//chat box input script
function sendBtn(){
    let chatBoxInput = document.getElementById("chatBoxInput");
    let myChatInput = document.getElementById("myChatInput");


    //return if nothing was entered
    if (!chatBoxInput) return;
    

    myChatInput.style.display=("block");
    myChatInput.innerHTML = chatBoxInput.value;         //declaring the input value to the p tag to display as a chat
    chatBoxInput.value = [];
}