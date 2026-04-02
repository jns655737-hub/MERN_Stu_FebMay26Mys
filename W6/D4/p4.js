//handling different GET routes
const http=require("http");

const server=http.createServer(function(req,res){
    if(req.method==="GET" && req.url==="/"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("home page/dashboard")
        return;
    }
    if(req.method==="GET" && req.url==="/about"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("About Route. Welcome to About Us Page.")
        return;
    }
    if(req.method==="GET" && req.url==="/products"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("About Route. Welcome to products Page.")
        return;
    }
    if(req.method==="GET" && req.url==="/Users"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("Returning all users")
        return;
    }
    //curl=client URL:free open src cli tool used to transfer data to or 
    // from a server using various network protocol.
    if(req.method==="POST" && req.url==="/Users"){
        res.writeHead(201,{"content-type":"text/plain"})
        res.end("NEW USER CRE.")
        return;
    }
    //Unknown route fallback
    res.writeHead(404,{"content-type":"text/plain"})
    res.end("Route not found");
});
server.listen(3002,function(){
    console.log("Server is running at http://localhost:3002");
});