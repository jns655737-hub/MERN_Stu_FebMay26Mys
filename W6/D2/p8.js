//Handling of error event in EventEmitter
const EventEmitter=require("events");

const fileEmitter=new EventEmitter();

//Register an error listener 
fileEmitter.on("error",function(error){
    console.log("Emitter handler error",error);
});

//Normal event listener:Happy scenario
fileEmitter.off("fileProcess",function(fileProcess){
    console.log("fileProcess successfully.",fileProcess);
});

fileEmitter.emit("fileProcess","report.csv")
fileEmitter.emit("error","File Processing failed");