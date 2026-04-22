const jwt=require("jsonwebtoken");
const user=require("../models/User");

//Authmiddleware creation
exports.protect=async(req,res,next)=>{
    try{
        let token;
        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer "))
            {
              token=req.authorization.split(" ")[1]
        }
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Not authorized,token missing"
            });
        }
        const decode =jwt.verify(token,process.env.JWT_SECRET);

        //Get user from DB
        const user=await user.findById(decode.id);

        if(!user){
             return res.status(404).json({
                success:false,
                message:"Not authorized,token missing"
            });
        }
        
        //attach user to request
        req.user=user;
        next();
    }
    catch(err){
        return res.status(401).json({
                success:false,
                message:"INVALID or EXPIRED TOKEN"
            });
    }
}