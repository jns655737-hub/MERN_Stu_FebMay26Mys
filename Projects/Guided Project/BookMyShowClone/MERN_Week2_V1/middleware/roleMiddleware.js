//checks the permission for request and allows it or rejects it
const CustomError=require("../utils/customError")

function roleMiddleware(...allowedRoles){
  return(req,res,next)=>{
    if(!req.user){
        return next(new CustomError("User info not found.",401)) 
    }
    if (!allowedRoles.includes(req.user.role)) {
        return next(new CustomError("Forbidden:you don't have access to this resource",401))
    }
    next();
  };
}
module.exports=roleMiddleware;