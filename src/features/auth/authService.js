
import axios from "axios";
import { API } from './authPath'
// import jwt_decode from 'jwt-decode'

const register = async (userData) => {
    const response = await axios.post(API+'/register', userData)
    if (response.data) localStorage.setItem('user', JSON.stringify(response.data.token))
    return response.data
}

const login = async (userData) => {
    const response = await axios.post(API+'/login', userData)
    if (response.data) localStorage.setItem('user', JSON.stringify(response.data.token))
    // console.log(jwt_decode(response.data.token)) //very important
    return response.data
}

const logout = async () => {
    localStorage.removeItem('user')
}

const authService = {register,logout,login}

export default authService