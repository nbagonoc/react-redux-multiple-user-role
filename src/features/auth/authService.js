import axios from "axios";
import { API } from './authPath'

const register = async (userData) => {
    const response = await axios.post(API+'/register', userData)
    if (response.data) localStorage.setItem('user', JSON.stringyfy(response.data))
    return response.data
}

const login = async (userData) => {
    const response = await axios.post(API+'/login', userData)
    if (response.data) localStorage.setItem('user', JSON.stringyfy(response.data))
    return response.data
}

const logout = async () => {
    localStorage.removeItem('user')
}

const authService = {register,logout,login}

export default authService