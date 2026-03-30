//Microtasks and macrotasks in nodejs
console.log("1.synchronous tasks");

//settimeout(...,0) schedules task for a later time.
//Even with the 0 delay,it doesn't interupt current sync code 
setTimeout(()=>{
    console.log("4. Timer callback executed");
},0);


//promise.resolve(...).then(...) schedure a microtask
Promise.resolve().then(function(){
    console.log("3. promise microtask executed."); 
});


console.log("2. synchronous end.");
