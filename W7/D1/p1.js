//Basics of ExpressJS - setup
//npm init -Y
//npm install express

//Import module of express
const express = require("express");

//calling express() creates the main application object
//This object is used to register routers and middleware
const app=express();

//app.get() handles get request for a specific path
// the / indicates the root url
app.get("/",function(req,res){
    //res.send() sends a response body and ends the req automatically
    res.send("Hello from Express server");
});

//listen() starts the server on a choosen port number
//first par is port number
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000")
});