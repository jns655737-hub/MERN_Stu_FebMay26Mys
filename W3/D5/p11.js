//This keyword
const compareBtn=document.getElementById("compareBtn");

compareBtn.addEventListener("click",function(e){
    console.log("this===btn",this===compareBtn);
    console.log("current target===btn",
        e.currentTarget===compareBtn);
console.log("e.target===btn",e.target===compareBtn);
})

compareBtn.addEventListener("click",(e)=>{
    console.log("Arrow function");
console.log("this===btn",this===compareBtn);
console.log("current target===btn",
        e.currentTarget===compareBtn);
console.log("e.target===btn",e.target===compareBtn);
        
     
})