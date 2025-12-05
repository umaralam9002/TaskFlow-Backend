const User = require("../models/User");
const jwt = require("jsonwebtoken");

const protect = async (req,res,next) =>{
    try{
        let token = req.headers.authorization;

        if(token && token.startsWith("Bearer")){
            token = token.split(" ")[1]; // Extract token
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decode.id).select("-password");
            next();
        }else{
            res.status(401).json({ message:"No token"});
        }
    }catch (error) {
        res.status(401).json({ message:"Token Failed ",error:error.message });
    }
}

//Admin Only Access

const adminOnly = async (req,res,next) =>{

        if(req.user && req.user.role == "admin"){
            next();
        }else{
            res.status(401).json({ message:"Access Denied , Admin only"});
        }
};

module.exports = {protect,adminOnly};