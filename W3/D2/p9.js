//IIFE

(function(a,b){
    console.log("App:"+a+"Version:"+b);
})("NodeJS","V22.22.0");

//with return value
const result=(function(){
    const a=10,b=20;
    return a+b;
})();
console.log("sum of a and b:",result);
