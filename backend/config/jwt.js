// Tokenizar mi id del usuario para posteriormente usarlo como pase al front
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()

// Mi generador de token, Recibe el payload(lo que queremos convertir y lo convierte)
export const generatorToken = (payload) => {

  return jwt.sign(
    payload, 
    process.env.TOKEN_USER, 
    { expiresIn: "1d" },
);
};
