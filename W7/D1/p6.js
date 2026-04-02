//p6.js
const express=require("express");

const app=express();
app.get("/api/status",function(req,res){
    //res.JSON() automatically serailizes the object and sets the JSON content type
    res.status(201).json({
        success:true,
        messge:"Express API is working"
    });
});

app.get("/api/error",function(req,res){
    //res.JSON() automatically serailizes the object and sets the JSON content type
    res.status(404).json({
        success:false,
        messge:"requested resourse is not found."
    });
});
app.listen(4001,function(){
    console.log("Express server running at http://localhost:4001")
});