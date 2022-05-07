import { API } from './userPath'
import authenticator from '../../utils/authenticator.js'

const get = async (param) => {
    const response = await authenticator.setAuthorization().get(`${API}/view/${param}`)
    if (response.data.success === false) throw new Error(response.data.message)
    return response.data.user
}

const getAll = async () => {
    const response = await authenticator.setAuthorization.get(`${API}`)
    if (response.data.success === false) throw new Error(response.data.message)
    return response.data.users
}

const userService = { get, getAll }

export default userService