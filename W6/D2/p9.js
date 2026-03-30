//Removing eventemitter listeners

const EventEmitters=require("events");
const jobEmitter=new EventEmitters();
function showJobProgress(status){
    console.log("job status:",status);
}

//Adding listener
jobEmitter.on("progress",showJobProgress);

//emit the event
jobEmitter.emit("progress","50% Completed")

//Remove the listener
jobEmitter.off("progress",showJobProgress);

//emit the event
jobEmitter.emit("progress","100% Completed")
