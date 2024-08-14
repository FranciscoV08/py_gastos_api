import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

export const authenticate = (req, res, next) =>{
    // Obtenemos las cokies
    const token = req.cookies.token;
    if(!token){
        res.json({message: "Sin autorizacion, sin token para ingresar"})
    }
    jwt.verify(token, process.env.TOKEN_USER, (err, decode) => {
        if(err){
            console.log(err)
        }
        // console.log(decode.id)
        // Guardamos en la request 
        req.user = decode.id
        next()
    })
}   