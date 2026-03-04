//Function Scope 
function Scope(){
    var insidevar=10;
    let insidelet=20;
    const insideconst=30;
    // console.log(insidevar);
    // console.log(insidelet);
    // console.log(insideconst);    
}
Scope();
// console.log(insidevar);//FunctionScoped
// console.log(insidelet);//BlockScoped
// console.log(insideconst);//BlockScoped   

function varfunctionScoped(){
        if(true){
            var x=40;
        }
        console.log("x:",x);
        console.log("y:",y);
        
}
varfunctionScoped()