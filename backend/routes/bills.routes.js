// Importo express 
import express from 'express'
import { createBill, deletBill, getBills } from '../controllers/billsControllers.js';
import {authenticate} from '../middlewares/validateToken.js'
// Inicializo la propiedad Router ( Creamos un router )
const router = express.Router();

// Siempre y cuando tengamos el token podemos crear un gasto
// Obtenemos los gastos del usuario 
router.get("/bills", authenticate ,getBills)
// Creamos un gasto
router.post("/bills", authenticate , createBill)
// Eliminamos un gasto
router.delete("/bills/:id", authenticate , deletBill)

export default router