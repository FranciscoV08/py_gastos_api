// APP este archivo es esclusivo en donde configuramos express
import express  from "express";
// Morgan - Muestra en consola las solicitudes
import morgan from "morgan";
// Cookie-parser - biblioteca para manejar las cokies
import cookieParser from "cookie-parser";
// Importo mis rutas
import authRoutes from './routes/auth.routes.js'
import billsRoutes from './routes/bills.routes.js'
// Importamos cors 
import cors from 'cors'

// Inicialiamos expres 
const app = express();

// <<----------->>
// CORS
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))
// app utiliza morgan para las peticiones
app.use(morgan('dev'))
// Configuracion para utilizar json
app.use(express.json())
// Configuracion para utilizar cookies
app.use(cookieParser())
// Utiliza a partir del path todas las rutas
app.use('/api',authRoutes)
app.use('/api',billsRoutes)



app.get('/', (req, res) => {
    res.json({message: "SERVER OK "})

})

export default app