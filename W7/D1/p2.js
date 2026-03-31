//Basic routing in express

const express=require("express");

const app=express();
app.get("/",function(req,res){
    //res.send() sends a response body and ends the req automatically
    res.send("Hello route is express server");
});

app.get("/about",function(req,res){
    //res.send() sends a response body and ends the req automatically
    res.send("About Hello route is express server");
});

app.get("/product",function(req,res){
    //res.send() sends a response body and ends the req automatically
    res.send("Product Hello route is express server");
});
app.listen(4001,function(){
    console.log("Express server running at http://localhost:4001")
});
