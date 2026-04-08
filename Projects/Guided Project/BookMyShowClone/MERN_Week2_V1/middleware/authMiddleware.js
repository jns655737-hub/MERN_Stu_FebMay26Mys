//Middleware to create verify JWT Token
//used for authentication
const jwt=require("jsonwebtoken");
const CustomError=require("../utils/customError")
// using .. to get out of present folder
const JWT_SECRET="Vishnudumma";
// middleware wil show everything which happens after the login and before the logout
function authMiddleware(req,res,next){
    try{
         const authHeader=req.headers.authorization;
         const tokenFromHeader=authHeader && authHeader.startswith("Bearer")?authHeader.split(" ")[1]:null;

         const token=tokenFromHeader || req.cookies.token;
         
        if(!token){
            return next(new CustomError("Access denied. Token not provided",401))
        }

        const decoded=jwt.verify(token,JWT_SECRET);
        req.user=decoded;
        next();
    }
    catch(error){
        next(new CustomError("Invalid or expired token",401))
    }
}

module.exports={
    authMiddleware,
    JWT_SECRET
};