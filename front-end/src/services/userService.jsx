import request from '../utills/HttpRequest'

export const getUsers = async () => {
    const res = await request.get('users')
    return res.data
}
