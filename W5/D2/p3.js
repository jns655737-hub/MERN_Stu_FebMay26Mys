//Asynchronous approach of Node.js

console.log("Step 1:Script Started.");

setTimeout(function(){
    console.log("Step 4:Delayed callback finished.F1.");
},3000)

setTimeout(()=>{
    console.log("Step 3:Delayed callback finished.F2.");
},1000)

console.log("Step 2:Script did not stop while waiting");
