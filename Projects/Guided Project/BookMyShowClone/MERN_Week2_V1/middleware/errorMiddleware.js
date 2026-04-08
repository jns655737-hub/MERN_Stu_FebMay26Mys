//generic error handler is created
function errorMiddleware(err,req,res,next){
   const statusCode=err.statusCode || 500;//if we not set the error statuscode then by default it taks 500
   
   res.status(statusCode).json({
    success:false,
    message:err.message || "Internal server error"
   })
}

module.exports=errorMiddleware