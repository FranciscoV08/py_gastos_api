import React from 'react'
import {Link, Outlet, useNavigate} from 'react-router-dom'
// import { logout } from '../../../backend/controllers/authControllers'
import { useAuth } from '../context/AuthContext'

export const Navbar = () => {

  const {isAutenticate, user, logout } = useAuth()
  const navigate = useNavigate()
  
  const onLogout = () => {
    logout()
    // Redireccionar a login 
    navigate("/login")
  }

  // console.log(isLoading, user)

  // const {username} = user;
// console.log(isAutenticate)

  return (
    <div>
      {
        isAutenticate ? (
          <div className='bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg'>
            <Link to={"/profile"} className='font-bold text-xl'>Personal Finance</Link>
            <h2>Welcome<span className='font-bold'>
              {
                user === null ? <h1>Loading..</h1> : user.username
              }
              </span></h2>

            <div>
                <Link to={"mimoney"} className='bg-blue-700 p-3 rounded-md mx-2'>My money</Link>
                <Link to={"miobject"} className='bg-blue-700 p-3 rounded-md mx-2'>My objetive</Link>
                <button onClick={onLogout} className='bg-red-700 p-3 rounded-md mx-2'>logout</button>
            </div>
        </div>
        ): (
          <div className='bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg'>
            <h1 className='font-bold text-xl'>Personal Finance</h1>
            <div>
                <Link to={"/login"} className='bg-blue-700 p-3 rounded-md mx-2'>Login</Link>
                <Link to={"/register"} className='bg-blue-700 p-3 rounded-md mx-2'>Register</Link>
            </div>
        </div>
        )
      }
        <div>
        <Outlet />
        </div>
    </div>
  )
}
