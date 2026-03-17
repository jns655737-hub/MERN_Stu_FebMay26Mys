const signupForm=document.getElementById("signupForm");
const signupEmail=document.getElementById("signupEmail");
const signupPasswoed=document.getElementById("signupPasswoed");
const message=document.getElementById("message");
const message1=document.getElementById("message1");
const signupPsw=document.getElementById("signupPsw")


signupForm.addEventListener("submit",
    function(event){//event is a object
        event.preventDefault();
        const email=signupEmail.value.trim();

        if(!email){
            message.textContent="Email is required";
            message.style.color="red";
            signupEmail.focus();
            return;
        }
        if (!email.includes('@')||!email.includes('.')) {
            message.textContent="please enter valid email";
            message.style.color="red";
            signupEmail.focus();
            return;
        }
        //Password validation
        const password=signupPasswoed.value;
        console.log(signupForm.elements.signupPasswoed.value);
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
            signupPasswoed.focus();
            return;
        }
        //check Uppercase char
        if(!/[A-Z]/.test(password)){
       message.textContent="Password must have atleast 1 uppercase character";
            message.style.color="red";
            signupPasswoed.focus();
            return;
        }
        //check lowercase char
        if(!/[a-z]/.test(password)){
       message.textContent="Password must have atleast 1 lowercase character";
            message.style.color="red";
            signupPasswoed.focus();
            return;
        }
        //check number
        if(!/\d/.test(password)){
            message.textContent="Password must have atleast 1 number character";
            message.style.color="red";
            signupPasswoed.focus();
            return;
        }
        //Special characters
        if(![/[@#$&*!]/.test(password)]){
            message.textContent="Password must have atleast 1 special character";

            message.style.color="red";
            signupPasswoed.focus();
            return;
        }
        message.textContent=" ";
        message.style.color="black";
        // message1.textContent="Successfull"
        // message1.style.color="green";
        console.log("Success!",({email,password:"**hidden**"}));
        

       // Password1 validation
        const password1=signupPsw.value;
        console.log(signupForm.elements.signupPasswoed.value);
        if(!password1){
            message.textContent="Confirm Password";
            message.style.color="red";
            signupPsw.focus();
            return;
        }
        //check length of password
        if(password1.length<8){
            message.textContent="Password must be atleast 8 char long";
            message.style.color="red";
            signupPsw.focus();
            return;
        }
        //check Uppercase char
        if(!/[A-Z]/.test(password1)){
       message.textContent="Password must have atleast 1 uppercase character";
            message.style.color="red";
            signupPsw.focus();
            return;
        }
        //check lowercase char
        if(!/[a-z]/.test(password1)){
       message.textContent="Password must have atleast 1 lowercase character";
            message.style.color="red";
            signupPsw.focus();
            return;
        }
        //check number
        if(!/\d/.test(password1)){
            message.textContent="Password must have atleast 1 number character";
            message.style.color="red";
            signupPsw.focus();
            return;
        }
        //Special characters
        if(![/[@#$&*!]/.test(password1)]){
            message.textContent="Password must have atleast 1 special character";

            message.style.color="red";
            signupPsw.focus();
            return;
        }

          if(password===password1){
            message1.textContent="Successfull"
            message1.style.color="green";
        }
        else{
           
        // message.textContent="Confirm password";
        // message.style.color="black";
        message1.textContent="UnSuccessfull"
        message1.style.color="red";
        console.log("Success!",({email,password:"**hidden**"}));
        
        }
      

    signupEmail.addEventListener("input",
        ()=>message.textContent=" ");
    signupPasswoed.addEventListener("input",
        ()=>message.textContent=" ");


    });


     
        

        