//Throw errors
// function divide(a,b){
//     if(b==0){
//         throw new Error("cannot divide by zero");
//     }
//     return a/b;
// }
// try{
//     // console.log(divide(10,2));
//     console.log(divide(10,0));

// }
// catch(err){
//     console.log("caught:",err.message);
    
// }

//Throw errors
// function checkAge(age){
//     if(age<18){
//         throw new Error("Age must be 18 or above");
//     }
//     console.log("You can vote");
    
//     return age;
// }
// try{
//     // console.log(checkAge(10));
//     console.log(checkAge(20));

// }
// catch(err){
//     console.log("caught:",err.message);
    
// }

//creat a customer error class
class validationError extends Error{
   constructor(message,name){
    super(message);
    this.name="validationError";
   }
}
function createUser(name){
    if (!name) {
        throw new validationError("name is required")
    }
    console.log("Hi my name is",name);
    
    return {name};
}
try{
    console.log(createUser("Jeevan"));
    // console.log(createUser(""));
}
catch(err){
    console.log("caught error",err.message);
    
}