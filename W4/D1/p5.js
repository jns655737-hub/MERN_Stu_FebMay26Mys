//Break point
//inspect the variabe values
//View the call stack
//step through code line by line 
//Evalute expression by the console
//Watch variables change during the execution
// To find logical error 
function calculateTotal(prices){
    let total=0;
    for(let i=0;i<prices.length-1;i++){
        let price=prices[i];
        debugger;
        total=total+price;
    }
    return total
}

let cart=[10,20,30]
console.log("Total:",calculateTotal(cart));
