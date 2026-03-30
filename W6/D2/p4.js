//Using the Event Emitter class
const EventEmitter=require("events");

//create a new event emitterinstance
//This object can publish and allow listeners to subscribe
const orderEmitter=new EventEmitter();

//Register a listener for the "orderplaced" event.
//Whenever the event is emitted the function will be execute
//once
//  function will listens to the emit only once
orderEmitter.once("OrderPlaced",
    function(orderId,cusName){
             console.log("Hello!!" +cusName+ ",Waiting for Restaurent to accept order.");
   }
);

orderEmitter.on("OrderPlaced",
    function(orderId){
             console.log("Restaurant accepted order.",orderId);
   }
);

orderEmitter.on("OrderPlaced",
    function(orderId){
             console.log("Arriving Delivery Partner.");
   }
);

orderEmitter.on("OrderPlaced",
    function(orderId,cusName,DelPartner){
             console.log(DelPartner+" is Delivering your order " +orderId);
   }
);
//emit the event with extra data
// the listener receives the orderId value
orderEmitter.emit("OrderPlaced","ORD-3563747","Jeevan","RohithRaj");
orderEmitter.emit("OrderPlaced","ORD-3563747","Jeevan","RohithRaj");