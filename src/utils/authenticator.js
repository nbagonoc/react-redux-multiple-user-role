import jwt_decode from 'jwt-decode'
import axios from "axios"

const getStorage = JSON.parse(localStorage.getItem('user'))

const setStorage = res => localStorage.setItem('user', JSON.stringify(res))

const unSetStorage = () => localStorage.removeItem('user')

const setUser = () => {
    const payload = getStorage ? jwt_decode(JSON.parse(localStorage.getItem('user'))) : null
    const user = payload !== null ? { name: payload.name, role: payload.role, token: getStorage } : null

    return user
}

const setAuthorization = axios.create({
    headers: { Authorization: getStorage }
})

const authenticator = { setStorage, setUser, setAuthorization, unSetStorage }

export default authenticator