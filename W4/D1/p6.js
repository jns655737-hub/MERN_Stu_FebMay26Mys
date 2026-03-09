//finally
// function example(){
//     try{
//         console.log("Example in try block");
//         return "TRY_RETURN";
//     }
//     finally{
//         console.log("This is printed first");
//     }
// }
// console.log("Example result:",example());

//return in catch block and still not finally 
function example(){
   try{
    try{
        throw new Error('new error')
    }
    catch(e){
          console.log("Example 1:Caught error");
        //   return 10;
        throw(e);
    }
    finally{
        console.log("Example 1:Finally still Runs"); 
    } 
}
catch(e){
    console.log(example());
    
 }
}

console.log(example());

