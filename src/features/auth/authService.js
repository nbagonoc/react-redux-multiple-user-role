import axios from "axios"
import { API } from './authPath'
import authenticator from '../../utils/authenticator.js'

const register = async (userData) => {
    const response = await axios.post(`${API}/register`, userData)
    if (response.data.success === false) throw new Error(response.data.message)
    return response.data.message
}

const login = async (userData) => {
    const response = await axios.post(`${API}/login`, userData)
    if (response.data.success === true) {
        authenticator.setStorage(response.data.token)
        return authenticator.setUser()
    } else throw new Error(response.data.message)
}

const logout = async () => {
    authenticator.unSetStorage()
}

const test = async () => {
    const response = await authenticator.setAuthorization().get(`${API}/test`)
    return response.data
}

const authService = { register, logout, login, test }

export default authService