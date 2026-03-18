//Why we use Async/Await
function getUser(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({id:101,name:"jeevan"});
        },1000);
    });
}
function getOrders(userId){
    return new Promise(function(resolve){
      setTimeout(function(){
        resolve(["order-A","order-B"])
      },1200);
    });
}
async function showUserAndOrders(){
    const user = await getUser();
    // console.log("User loaded:",user.name);
    
    const order=await getOrders(user.id);
    console.log("Order loaded:",order);
    
}
showUserAndOrders();