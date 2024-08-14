import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext'

const ProtectedRoutes = ({element}) => {

    const {isAutenticate, isLoading} = useAuth();

    useEffect(() => {
    }, [])

    // console.log(isAutenticate, isLoading)
    // Si el estado esta en true retorna
    if(isLoading) {
        return <h1>Cargando...</h1>
    }
    // Si el usuario no esta autenticado no pasa
    if(!isAutenticate && !isLoading) {
        return <Navigate to={"/login"}/>
    }

    // console.log(isAutenticate, isLoading)
    // Retornara los elementos solo si pasan la validacion
    return element
}

export default ProtectedRoutes