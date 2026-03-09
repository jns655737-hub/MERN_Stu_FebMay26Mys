//Logging 

// console.log("Hey Hey");

// console.warn("Shreyas");

// console.error("How are you");

let user=[
    {id:2,name:"Jeevan"},
    {id:3,name:"NS"}
];

console.log(user);
console.table(user)

// Group related logs
console.group("Grouped logs");
console.log("Log1");
console.log("Log2");
console.log("Log3");
console.groupEnd();

//Measure execution time
console.time("LoopTimer");
for(let i=0;i<1000;i++){

}
console.timeEnd("LoopTimer")
