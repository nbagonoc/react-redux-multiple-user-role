import { API } from './userPath'
import authenticator from '../../utils/authenticator.js'

const view = async (param) => {
    const response = await authenticator.setAuthorization.get(`${API}/view/${param}`)
    if (response.data.success === false) throw new Error(response.data.message)
    return response.data.user
}

const getAll = async () => {
    const response = await authenticator.setAuthorization.get(`${API}`)
    if (response.data.success === false) throw new Error(response.data.message)
    return response.data.users
}

const update = async (param) => {
    const response = await authenticator.setAuthorization.put(`${API}/update/${param.id}`, param.data)
    if (response.data.success === false) throw new Error(response.data.message)
    return response.data.message
}

const userService = { view, getAll, update }

export default userService