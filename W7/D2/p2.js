//Third party midleware are available @npm registry
const express=require("express");
//Middleware to log all the request--->it log req and also res
const morgan=require("morgan");
const cors=require("cors");//it is for security purpose 
const app=express();

app.use(morgan("dev"));//we use only in the development phase.
app.use(cors());//we use this even in the production server.

app.get("/",function(req,res){
    res.json({
        message:"Third-party middleware excuted before this response"
    });
});
 app.listen(4004,function(){
    console.log("Express server running at http://localhost:4004")
});