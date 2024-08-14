import { createContext, useContext, useEffect, useState } from "react";
// Axios y las conexiones
import { loginAx, logoutAx, registerAx, verifyTknAX } from "../api/auth";
// js-cookie para manejar la cokie que le mandamos
import Cookie from "js-cookie";
import { getBillsAx } from "../api/bills";

// Inicializamos el contexto de autenticación
export const AuthContext = createContext();

// Creamos un hook personalizado para acceder al contexto de autenticación
// Esto facilita el uso del contexto en los componentes
export const useAuth = () => {
  const context = useContext(AuthContext);
  // Verificamos si el contexto existe, si no, lanzamos un error
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};
// Creamos el proveedor del contexto de autenticación
// Este componente envuelve la aplicación y proporciona el contexto a sus hijos
export const AuthProvider = ({ children }) => {
  // Estado para almacenar la información del usuario
  const [user, setUser] = useState(null);
  const [isAutenticate, setIsAutenticate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState();

  // Función para registrar un nuevo usuario utilizando Axios
  const register = async (data) => {
    try {
      const res = await registerAx(data);
      console.log(res);
    } catch (error) {
      console.log(error, "Este error viene de Register");
    }
    // Aquí podrías agregar lógica para manejar la respuesta del registro
  };
  // Funcion para logear un usuario que esta en la db
  const login = async (data) => {
    try {
      // Aquí podrías agregar lógica para manejar la respuesta del registro
      const res = await loginAx(data);
      const user = res.data.user;

      setUser(user);
      setIsAutenticate(true);
      setIsLoading(false);

      const cookie = Cookie.get();
      console.log(cookie);
      console.log(res.data.user);
    } catch (error) {
      console.log(error, "Este error viene de Register");
    }
  };
  const logout = async () => {
    try {
      const res = await logoutAx();
      setIsAutenticate(false);
    } catch (error) {
      console.log(error);
    }
  };
  // Necesitamos mantener la sesion con la cokie que le mandamos
  useEffect(() => {
    const checkLogin = async () => {
      // Consulta la cokie
      const { token } = Cookie.get();
      if(!token){
        setIsLoading(false);
      }
      //Si existe el token
      if (token) {
        const res = await verifyTknAX();

        setIsAutenticate(true);
        setIsLoading(false)
        setUser(res.data);
      }
    };
    checkLogin();
  }, []);


  return (
    // Proveemos el contexto con los valores que deseamos compartir
    <AuthContext.Provider
      value={{
        login, //funcion de sesion
        register, // Función de registro
        user, // Información del usuario
        isLoading,
        isAutenticate,
        logout,
        getBills,
        bills
      }}
    >
      {children}{" "}
      {/* Renderizamos los hijos que serán envueltos por el proveedor */}
    </AuthContext.Provider>
  );
};
