// Hook para manejar los formuluarios
import { useEffect } from 'react';
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
// Context
import { useAuth } from '../context/AuthContext';

export const LoginPage = () => {
  const {register, handleSubmit} = useForm()
  const {login, isAutenticate} = useAuth()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    login(data)
    console.log(data)
  }

useEffect(() => {
  
  if(isAutenticate) navigate("/profile")

}, [isAutenticate])


  return (
    <>
      <div className="text-zinc-900 h-screen flex items-center justify-center">
        <div className="max-w-md px-20 py-5 rounded-md bg-customColor-BGC  ">
          <h2 className="font-bold text-white text-2xl py-5">Login</h2>

          <form 
          onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              {/* register. Registra el valor y lo guarda en un obj con el nombre que recibe como parametro */}
              <input
                {...register("email", { required: true })}
                type="email"
                className="rounded-md w-full px-4 py-2 my-2"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                {...register("password", { required: true })}
                type="password"
                className="rounded-md w-full px-4 py-2 my-2"
                placeholder="Password"
              />
            </div>

            <div className="flex justify-between text-white my-5 ">
              <button className="bg-blue-600 p-2 rounded-md " type="submit">
                Enviar
              </button>
              <button type="submit">Register..?</button>
            </div>

            <h2 className="text-red-500">Se produjo un error en....</h2>
          </form>
        </div>
      </div>
    </>
  );
};
