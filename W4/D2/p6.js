const livePswd=document.getElementById("livePswd");
const message=document.getElementById("message");

livePswd.addEventListener("input",function(){

    const password=livePswd.value;
        if(!password){
            message.textContent="Password is required";
            message.style.color="red";
            signupPasswoed.focus();
            return;
        }
        //check length of password
        if(password.length<8){
            message.textContent="Password must be atleast 8 char long";
            message.style.color="red";
            livePswd.focus();
            return;
        }
        //check Uppercase char
        if(!/[A-Z]/.test(password)){
       message.textContent="Password must have atleast 1 uppercase character";
            message.style.color="red";
            livePswd.focus();
            return;
        }
        //check lowercase char
        if(!/[a-z]/.test(password)){
       message.textContent="Password must have atleast 1 lowercase character";
            message.style.color="red";
            livePswd.focus();
            return;
        }
        //check number
        if(!/\d/.test(password)){
            message.textContent="Password must have atleast 1 number character";
            message.style.color="red";
            livePswd.focus();
            return;
        }
})