import { useState } from 'react'
import { useForm } from 'react-hook-form';
// mi contexto
import { useAuth } from '../context/AuthContext';

export const RegisterPage = () => {
  //Reack-hook-Form libreria para facilitar el manejo del form
  const { register, handleSubmit } = useForm();
  const [users, setUsers] = useState();
  
  const {
    register:registerAuth //Cambiamos el nombre para evitar problemas 

    } = useAuth()

  const onSubmit =(data) => {
    registerAuth(data)

  };

  

  return (
    <>
      <div className="text-zinc-900  h-screen flex items-center justify-center">
        <div className="max-w-md px-20 py-5 rounded-md bg-customColor-BGC  ">
          <h2 className="font-bold text-white text-2xl py-5">Register</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("username", { required: true })}
                className="rounded-md w-full px-4 py-2 my-2"
                placeholder="User"
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
              <button type="submit">Login..?</button>
            </div>

            <h2 className="text-red-500">Se produjo un error en....</h2>
          </form>
        </div>
      </div>
    </>
  );
}
