//Introduction to promises
console.log("Program Started.");
function getwelcomeMsg(){
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve("Welcome to promises");
        },1000);
    });
}
const messagePromise=getwelcomeMsg();

console.log("Promise  created. Result not ready yet.");

messagePromise.then(function(message){
    console.log(message);
})

console.log("programm continues while the promise is pending.");
