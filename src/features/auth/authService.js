
import axios from "axios"
import { API } from './authPath'
import jwt_decode from 'jwt-decode'
const token = JSON.parse(localStorage.getItem('user'))

const authAxios = axios.create({
    headers: { Authorization: token }
})

const register = async (userData) => {
    const response = await axios.post(`${API}/register`, userData)
    if (response.data.success === false) throw new Error(response.data.message)
    return response.data.message
}

const login = async (userData) => {
    const response = await axios.post(`${API}/login`, userData)
    if (response.data.success === true) {
        localStorage.setItem('user', JSON.stringify(response.data.token))
        const payload = jwt_decode(response.data.token)
        return { name: payload.name, role: payload.role, token: response.data.token }
    } else throw new Error(response.data.message)
}

const logout = async () => {
    localStorage.removeItem('user')
}

const test = async () => {
    const response = await authAxios.get(`${API}/test`)
    return response.data
}

const authService = { register, logout, login, test }

export default authService