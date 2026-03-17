//callback handling with name functions
function loadUser(next){
   setTimeout(function(){
    console.log("Step 1:User loaded.");
    next();
   },400);
}
function loadOrders(next){
   setTimeout(function(){
    console.log("Step 2:User Orders.");
    next();
   },400);
}
function loadPayments(next){
    setTimeout(function(){
        console.log("Step 3:load Payments");
        next();
    },400);
}
function loadShipment(){
    setTimeout(function(){
        console.log("Step 4:load Shipment");
        console.log("same flow but easier to read");
        
    },400);
}
loadUser(function(){
    loadOrders(function(){
        loadPayments(function(){
            loadShipment()
        });
    });
});