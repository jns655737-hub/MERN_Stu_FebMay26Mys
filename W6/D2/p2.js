//How JS handles asynchronous tasks in nodejs
function fetchReport(callback){
     console.log("Fetching report data...");
    
     setTimeout(()=>{
        const report="Monthly report is ready";
        callback(report);
     },1000)
}
fetchReport(function(reportMessage){
    console.log(reportMessage);
})
console.log("Application continuous to execute further");
