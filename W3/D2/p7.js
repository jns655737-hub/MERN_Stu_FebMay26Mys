//Arrow function
(args)=>{
    //body
}

//Adding 2 numbers
const add= (a,b)=>{
    return a+b;
}
console.log("3+5:",add(3,5));
//Single line return also cll it as implicit return
const square=x=>x*x;
console.log("Square of 44:",square(44));


const say=()=> console.log("Hello from Arrow Function");
say();
