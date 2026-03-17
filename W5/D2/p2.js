//Basic callback variation
//1.a callback with no input data
//2.a callbck that receives data from main function

function runTask(callback){
    console.log("Task is running");
    callback();
}
function ruTaskwithResult(taskname,callback){
    console.log("Processing Task:",taskname);
    callback("Task"+taskname+"Finish successfully.");
}
function showSimple(){
    console.log("Simple callabck executed.");
}
function showDetailedMsg(message){
    console.log(message);
}
runTask(showSimple);
ruTaskwithResult("send montly report",showDetailedMsg)