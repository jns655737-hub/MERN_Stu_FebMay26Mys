//Routing
//"/" base url
// "/api/users"
const express=require("express");
const app=express();

// "/api/user/first/second"

//Router objects help organize route groups
const apiRouter=express.Router();

apiRouter.get("/users",function(req,res){
    res.json({
        route:"/api/users",
        message:"Users route inside api router"
    });
});

apiRouter.get("/orders",function(req,res){
    res.json({
        route:"/api/orders",
        message:"orders route inside api router"
    });
});  
//Mount the router under the /api base path
app.use("/api",apiRouter);

//**New Router *//
//products router(handles/api/products/..)
const productRouter=express.Router();
 // /api/products ->create products
 productRouter.post("/",(req,res)=>{
    res.json({
        route:"/api/products",
        meggage:"create products"
    });
 });

 // /api/products/:id  ->delete product
 productRouter.delete("/:id",(req,res)=>{
    res.json({
        route:`/api/products/${req.params.id}`,
        message:"Delete products"
    });
 });

 //mount products router under /api/products
 apiRouter.use("/products",productRouter);

 app.listen(4003,function(){
    console.log("Express server running at http://localhost:4003")
});