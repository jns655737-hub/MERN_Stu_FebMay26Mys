//Secure the cookies with httpOnly and secure flags
const express=require("express")
const cookieParser=require("cookie-parser")
const app=express();
app.use(cookieParser());

app.get("/set",function(req,res){
    const isProduction=process.env.NODE_ENV==="production";//confusion
    res.cookie("sessionId","demo-session-123",{
        httpOnly:true,
        secure:isProduction,
        maxAge:30*60*1000
    });
    res.send("Session cookie set with httpOnly and environment secure flag");
})
app.get("/read-session",function(req,res){
    res.json({
        message:"Server can read the cookies value from the request",
        sessionId:req.cookies.sessionId ||"NO SESSION COOKIE FOUND"
    });
});
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000")
});