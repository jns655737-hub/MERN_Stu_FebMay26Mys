//Default parameters
function product(a=1,b=1){      //Default parameters
     return a*b;
}
console.log("product of 15:",product(15));    

//Rest Parameters
function sumofAll(...numbers){
       console.log(...numbers);
       
}
sumofAll(1,2,3);
sumofAll(1,3);
sumofAll(1);