//centralized error handler used for ,if we get any error in other files it rediredt to this file
//custom error class created for error handling. 
class CustomError extends Error{
    constructor(message,statusCode){
        super(message);//call the constructor of super class
        this.statusCode=statusCode;
    }
}

module.exports=CustomError;