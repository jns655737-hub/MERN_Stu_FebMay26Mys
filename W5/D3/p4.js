// combining multiple promise-based steps with async/await

function getOrderId(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(101);   // return some order ID
        }, 500);
    });
}

function getOrderDetails(orderId){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({
                id: orderId,
                product: "laptop",
                quality: 2
            });
        }, 1000);
    });
}

async function showOrderSummary() {
    const orderId = await getOrderId();
    console.log("Order id:", orderId);

    const orderDetails = await getOrderDetails(orderId);
    console.log("Product:", orderDetails.product);
    console.log("Quantity:", orderDetails.quality);     
}

showOrderSummary();