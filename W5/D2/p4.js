//Writing custom callback functions

function processStudent(name,score,callback,callback1){
    console.log("Student name:",name);
    console.log("Student score:",score);
    
    callback(name,score);
    callback1(name,score)
}
function showResults(name,score){
    if(score>=70){
        console.log(name+" has passed.");
    }
    else{
        console.log(name+"has failed");
    }
}
function showGrade(name,score){
    if(score>=85){
        console.log("Grade:A+");
    }
    else if(score>=75){
        console.log("Grade:A");
    }
    else if(score>=70){
        console.log("Grade:B");
    }
    else{
        console.log("Grade:Fail");
    }
}
processStudent("Jeevan",80,showResults,showGrade)
// processStudent("Jeevan",80,showGrade)