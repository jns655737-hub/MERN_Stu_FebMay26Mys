//Prevent default with events
const loginForm=document.getElementById("loginForm");
const userName=document.getElementById("userName");
const message=document.getElementById("message");

loginForm.addEventListener("submit",function(monkey){
    //stop page reload 
    monkey.preventDefault();
    if(userName.value.trim()===""){
        message.textContent="Username is required";
        console.log("Form blocked:no input for username");
        return;
    }
    message.textContent="Form handled by JS for user",
    userName.value;
    console.log("Form submitted with username",userName);
});