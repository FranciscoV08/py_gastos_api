//------- Definicion del modelo del usuario
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  // El mongooseSchema recibe un obj con datos especificos
  username: {
    // De typo string
    type: String,
    // Es requerido
    require: [true, "El usuario es bligatorio"],
    // Tiene que ser unico
    unique: true,
    // Le sacamos los espacios
    trim: true,
    minlength: [3, "El Username debe tener almenos 3 caracteres"],
  },
  email: { 
    type: String,
    require: [true, "El usuario es bligatorio"],
    unique: true,
    trim: true,
   },
  password: { type: String, require: true },
});

// Uso el metodo de mongoose el que recibe .model(name, schema)
const User = mongoose.model("user", userSchema);

export default User;
