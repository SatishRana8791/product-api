
const jwt=require('jsonwebtoken');


const authMiddleware=async (req,res,next)=>{
    //code here
    try{
        const token= req.headers['x-auth-token'];
        if(!token){
            return res.status(401).json({
            success: false,
            message: "Token missing"
            });
        }
        const decoded=await jwt.verify(token, process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }
    catch(error){
        return res.status(401).json({
            success: false,
            message: "Invalid token"
        });
    }
}

module.exports=authMiddleware;