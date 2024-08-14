import { useEffect } from "react"
import { useAuth } from "../context/AuthContext"


export const ProfilePage = () => {

  const {user, getBills} = useAuth()
  
  useEffect(() => {
    getBills()
  }, [])
  

  return (
    <div className="text-white">
        <h1 className="font-bold text-2xl text-center">Bienvenido.!! <span className="font-mono text-green-500">{user.username}</span></h1>
        
    </div>
  )
}
