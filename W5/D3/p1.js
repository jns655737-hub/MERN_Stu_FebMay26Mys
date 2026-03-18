//Introduction to Async/await
function getMessage(){
    return new Promise(function(resolve){
       setTimeout(()=>{
        resolve("async/await makes promise based code easier to read");
       },1000);
    })
}
 async function showMessage(){
    console.log("loading Message");
    const Message=await getMessage();
    console.log(Message);
    
}
showMessage();