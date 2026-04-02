//Route parametres and query parameters
//route parameter:capture dynamic values from the path 
//query parameters:provides optional values 

const express=require("express");
const app=express();

app.get("/products",function(req,res){
    res.json({
        routeParameter:req.params.id,
        queryParameter:req.query
    });
});
app.listen(4002,function(){
    console.log("Express server running at http://localhost:4002")
});