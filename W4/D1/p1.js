//try catch basics
//Reference error
// const error=document.getElementById("error");
// try {
//     console.log("try to access undefine variable");
//     console.log(undefined);
//     // document.writeln("trying to access undefine variables")
// }
// catch(error){
//     console.log("Error caught",error.name,"-",error.message);  
//     error.textContent("trying to access undefine variables") 
// }
// console.log("Program execution continues");

//JSON Parsing error
let jsonText="{json}";
try{
    let num=10;
    num();
}
catch(err){
    console.log("Caught error:",err.name);
    
}
