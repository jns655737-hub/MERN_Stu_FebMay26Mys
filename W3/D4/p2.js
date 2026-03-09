//Array iterations 
let numArray=[1,2,3,4,5];
for(let i=0;i<numArray.length;i++){
    console.log(numArray[i]);
}

//for..of
for(let num of numArray){
    console.log(" ",num);
}

//for..each
numArray.forEach((val,index)=>{
    console.log(" ",index,val);
})