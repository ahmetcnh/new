import jwt from "jsonwebtoken"
import { APIError } from "../errors/error.js"
import {user} from "../models/model.js"


export const createToken = async(user,res)=>{
    const payload={
        sub: user.id,
        name: user.name,
    }
    const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY,{
        algorithm:"HS512",
        expiresIn: "7d",
    })
    return res.status(201).json({
        success: true,
        token,
        message: "başarili"
    })
}


export const tokenCheck = async(req,res,next)=>{

    const headerToken = req.headers.authorization && req.headers.authorization.startsWith("Bearer ")

    if(!headerToken)
        throw new APIError("geçersiz oturum",401)

    const token = req.headers.authorization.split (" ")[1]

    await jwt.verify(token, "D.sw321da=saww311903as/*sds",async(err,decoded)=>{
        if (err) throw new APIError("geçersiz token",401)
        const userInfo= await user.findById(decoded.sub).select("_id name lastname email")
        if(!userInfo)
            throw new APIError("geçersiz token",401)
        req.user = userInfo
        next();
    })
    
}