// Importamos mongose 
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const conectDB = async () => {
// Mandamos siempre en un TRYCATCH
    try {
        await mongoose.connect(process.env.DB_MONGO_URL)
        console.log('>>>> DB conect')
    } catch (error) {
        console.log('Error al momento de conectar la db', error)
    }
}

export default conectDB