const jsonOutput=document.getElementById("jsonOutput")
document.getElementById("saveBtn").addEventListener("click",
    function(){
        const user=
            {name:"Jeevan",
                ID:403,
                Role:"Developer",
                Skill:["HTML","CSS","JS"]};
                localStorage.setItem("userProfile",JSON.stringify(user))
                jsonOutput.textContent=
                "User Object saved as String to localstorage";
    }
)
document.getElementById("readBtn").addEventListener("click",
    function(){

        try{
        const up=localStorage.getItem("userProfile");
        console.log(JSON.parse(up));
        console.log(up);
        jsonOutput.textContent="userProfie"+ up;}
        catch(error){
              jsonOutput.textContent="JSON parsing failed"; 
        }
    }
);