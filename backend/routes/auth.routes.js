// Mis rutas para el autenticado
import express from 'express'
import { login, logout, register, profile, verifyTkn } from '../controllers/authControllers.js';
// Middleware para validar el token en rutas protegidas
import { authenticate } from '../middlewares/validateToken.js';
// Inicializo Router 
const router = express.Router()


router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);


// Routes protected - el autenticate obtiene la cokie y la compara con un id de la db
router.get("/profile",authenticate, profile);
router.get("/verifyTkn", verifyTkn)


export default router