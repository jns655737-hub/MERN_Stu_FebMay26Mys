//try catch finally with async/await

function processPayment(isSucceesed){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
        if(isSucceesed){
            resolve("Payment proceed successfully")
        }
        else{
            reject("Payment could't proceed")
        }
    })
  })
}

async function runPayment(isSucceeded){
   try{
    const result=await processPayment(isSucceeded);
    console.log("success",result);
   }
   catch(error){
    console.log("Error:",error);
   }
   finally{
    console.log("Payment flow Completed.");
   }
}
runPayment(false).then(function(){
    return runPayment(true);
});