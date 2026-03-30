//setImmediate vs setTimeout
console.log("Scheduling setTimeOut and setImmidiate");
 
//setImmidiate callback
setImmediate(function(){
    console.log("setImmediate callback executed.");
});

//callback timer
setTimeout(()=>{
    console.log("Timer callback from setTimeout");
},0);


console.log("Both callbacks are now waiting for the eventloop");

//setTimeout and setImmidiate are considered as macroTask