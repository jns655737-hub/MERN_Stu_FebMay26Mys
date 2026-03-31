//Handling different Http 
const express=require("express");

const app=express();

app.get("/users",function(req,res){
    //res.send() sends a response body and ends the req automatically
    // res.send("Hello route is express server");
    res.status(201).json([{message:"success"},
        {id:1,name:"Jeevan"},
        {id:2,name:"punith"},
        {id:3,name:"shreyas"}
    ])
    res.send("Returning all users");
});


// to create
app.post("/users",function(req,res){
    // res.status() sets the Http ststus code before 
    res.status(201).send("User created.");
});

app.listen(4003,function(){
    console.log("Express server running at http://localhost:4003")
});