//An asyn function always returns a promise
async function getStatusMessage() {
    return "Order is ready";
}
const result=getStatusMessage();
console.log("Is this returns value a promise:",result instanceof Promise);

result.then(function(message){
    console.log("Resolve value:",message);
});
//when we use async then it always returns the vaule as a promise