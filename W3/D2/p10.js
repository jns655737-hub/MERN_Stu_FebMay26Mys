//Call Back Function
//is a function which is passed as a arguement to another function
function greetUser(name,Callback){
     console.log("Hello",name);
     Callback();
}
greetUser("Jeevan",function(){
    console.log("callback functon");
    
})