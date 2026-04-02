//Generating token using login function and verifying token
const jwt=require("jsonwebtoken")

const secretKey="monkey123"
const newSecrectkey="karidumma";

function loginUser(email,password){
    if(email==="correct@email.com" && password==="mp123"){
      const token=jwt.sign(
        {
          userId:101,
          email:email,
          role:"student"
        },secretKey,{expiresIn:"1h"});
        return{
            success:true,
            token:token
        };
    }
 return{
            success:false,
            message:"Invalid credentials"
        };   
}

const loginResults=loginUser("correct@email.com","mp123");
console.log("Login Result",loginResults);
if(loginResults.success){
    try{
        const verifiedPayload=jwt.verify(loginResults.token,newSecretKey);
         console.log("Verified Payload:",verifiedPayload);
    }
    catch(error){
        console.log("verification failed",error.message);
}
    }
