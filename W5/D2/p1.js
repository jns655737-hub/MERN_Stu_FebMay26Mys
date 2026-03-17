//Introduction to callback function
function greetUser(name,callback){
    console.log("Hello,"+name);
  //callback function will only execute after the execution of primary function
    callback();
}
function showCompletionMsg(){
    console.log("The greeting task is complete");
}

greetUser("Vishnu",showCompletionMsg);