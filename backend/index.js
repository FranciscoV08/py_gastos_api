// Mi Inicializador del servidor 
// Importo mi app 
import app from "./app.js";
import dotenv from 'dotenv'
import conectDB from "./db.js";
// Inicializo dotenv
dotenv.config()

//Por si lo subo a render 
const port = process.env.PORT || 3000;

// Primero conectamos a la db
conectDB()
// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})