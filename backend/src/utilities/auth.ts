import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'

export const auth = async (req: Request, res: Response, next:NextFunction) => {

    try{
    const authorization = req.headers.authorization;
    if(authorization === undefined){
        return res.status(401).send({
            status: "Error",
            message: "You are not an authenticated user"
        })
    }
    const pin = authorization.split(" ")[1]
    if(!pin || pin === ""){
        return res.status(401).send({
            status: "ERROR",
            message: "SORRY! System Error"
        })
    }

    const decoded = jwt.verify(pin, `${process.env.APP_SECRET}`)

    if("user" in req){
        req.user = decoded
    }
    return next()
}catch(err){
   console.log(err) 
}
}