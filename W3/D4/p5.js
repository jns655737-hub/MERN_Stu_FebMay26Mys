//Reduce function 
//sum
// let nums=[5,10,15];

// let total=nums.reduce((intermediateSum,current)=>
// intermediateSum+current,0);
// console.log(total);


// Average
// let nums1=[5,10,15];

// let Average=nums1.reduce((intermediateSum,current)=>intermediateSum+current/nums1.length,0);
// console.log(Average);

//reduce to object count by categeory
let items=["pen","pencil","eraser","pen"];

let count=items.reduce((intermediatevalue,item)=>{
    intermediatevalue[item]=
    (intermediatevalue[item]||0)+1;
    return intermediatevalue;
},{});
console.log("items count:",count);
