//creating a simple http server

const http=require("http");

//createserver(): creates the http server instance
//Accepts the callback with two important objects:
//1.req:incoming request details
//2.res:outgoing response control

const server=http.createServer(function(req,res){
    //writeHead() sets the response status code and headers
              res.writeHead(200,{"m-type":"text/plain"});
              //end() sends the response body and closes the response
              res.end("Hello from nodejs Http server.");
});
//listen() binds the server to a port and starts accepting request
server.listen(3000,function(){
    console.log("Server is running at http://localhost:3000");
    //use port number between 0 to 1023 consider as system ports(reserved)
    //1024-49151:registered ports(we makeuse for our conve)
    //27017:mongoDB
    //3000 is consider as a safer port no
})