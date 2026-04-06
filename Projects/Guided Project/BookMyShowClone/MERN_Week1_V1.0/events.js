//This file creates and exports custom Eventemitter instance
const Eventemitter=require("events");

//Custom eventemitter object
const bookingEmitter=new Eventemitter;

module.exports=bookingEmitter;