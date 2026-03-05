//Basics array concept
console.log("Arrrays");
//creating arrays
let emptyArray=[];
let numArray=[1,2,3,4,5];
let mixedArray=["Hello",18,'J',true,{name:"Jeevan"},null,[6,9]];
console.log(emptyArray);
console.log(numArray);
console.log(mixedArray);

//creation of the arrays using constructors
let fruits=new Array("Apple","Mango","Jackfruit");
console.log(fruits);
console.log("Is fruits an array?",Array.isArray(fruits));

//Push function to add the value to the array
fruits.push("graphs")
console.log(fruits);

//Pop function to delete the last value from the array
fruits.pop();
console.log(fruits);

//unshift to add the value to the begining of the array
fruits.unshift("graphs")
console.log(fruits);

//shift is to remove value from begining
fruits.shift();
console.log(fruits);




