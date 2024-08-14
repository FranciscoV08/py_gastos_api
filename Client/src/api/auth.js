import axios from "./axios"

// export const pruebaUser = axios.get(API).then(res => {console.log(res.data)})
// Func. Que toma un user como param y lo manda 
export const registerAx = (user) => axios.post(`/register`,user)
export const loginAx = (user) => axios.post(`/login`,user)
export const logoutAx = () => axios.post('/logout')

export const verifyTknAX = () => axios.get('/verifyTkn')
