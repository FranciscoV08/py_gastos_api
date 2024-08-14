// Importo el eschema del Usuario
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import { generatorToken } from "../config/jwt.js";

// Aqui estan mis controladores( Para manejar la logica del login)
// Podriamos modularizar como nos muestra chatGPT

// Login - busca en la db por mail, Compara el hash del password, genera oto token al pasar las validaciones
export const login = async (req, res) => {
  // saco del body el username
  const { email, password } = req.body;

  try {
    // Busca en la db
    const user = await User.findOne({ email });
    const userPassword = await bcrypt.compare(password, user.password);
    //primero validame si contiene algo
    if (user === null) {
      res.json({ message: "No se logro encontrar una cuenta con esos datos" });
    }

    // Necesito saber si ese algo es igual al body de mi req.
    if (user && userPassword) {
      // Genero otra vez el token para el login
      const token = await generatorToken({ id: user._id });
      // Mandamos la info a una cookie
      res.cookie("token", token);
      res.json({ message: "Se encontro su cuenta", user });
    } else {
      res.json({ message: "Contraseña o email es incorrecto" });
    }
  } catch (error) {
    res.json({
      message: "el server se cayo, o existen errores en controlador Login",
      error,
    });
  }
};
// Register - Hashea el passwd, crea mediante el modelo un usuario y agrega el hash, guarda el user en la db, genera token
export const register = async (req, res) => {
  console.log(req.body)
  const { email, password, username } = req.body;
  try {
    // hash del pasword
    const passwordHashed = await bcrypt.hash(password, 10);
    // Nueva instancia del userModel
    const newUser = new User({
      email,
      username,
      password: passwordHashed,
    });

    // Guardamos en la db y lo guardamos en una varible
    const userSaved = await newUser.save();
    // Generamos el token
    const token = generatorToken({ id: userSaved._id });
    // Mandamos la info a una cookie
    res.cookie("token", token);

    // Le respondemos esto al client
    res.json({
      message: "Nuevo Usuario Creado",
      newUser,
    });
  } catch (error) {
    console.log(error);
  }
};

// Logout - para salir y borrar todo
export const logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logout exitoso" });
};

//
export const profile = async (req, res) => {
  const userFound = await User.findById(req.user);
  console.log(userFound);
  if (!userFound) {
    res.json({ message: "No se logro encontrar alguna cuenta" });
  }
  res.json({ 
    message: "Se ingreo al profile de la cuenta",
    id: userFound.id,
    username: userFound.username,
    email: userFound.password,
});
};

// Verificador de token, Este devuelve el usuario "si solo si tenemos un token "
export const verifyTkn = async (req, res) => {

  const {token} = req.cookies;
  if(!token) return res.json({message: "No existe token o no hay ningun token .authCbck"})
  // Verificamos el token
  jwt.verify( token, process.env.TOKEN_USER, async (err, user) => {
    if(err) return res.status(401).json({message:"No autorizado"})
    //Buscamos el user por id 
    const userFound = await User.findById(user.id);
    console.log(userFound)
    
    if(!userFound) return res.status(401).json({
      message: "No autorizado "
    })
    
    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email, 
    })
    
  })
}