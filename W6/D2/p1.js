//understanding the event loop
console.log("1. synchronous task started");

//setTimout schedule callback for later.
setTimeout(()=>{
    console.log("3. Timer callback executed");
},0);

console.log("2. synchronous tasks finished");

