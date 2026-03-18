//await with non promise values

function getReadyValue(){
    return 25;
}
function getDeleteValue(){
    return Promise.resolve(75);
}
async function showValues() {
    const readyValue=await getReadyValue();
    const delayedValue=await getDeleteValue();

    console.log("ready value:",readyValue);
    console.log("delayed value:",delayedValue);
    
    
}
showValues();