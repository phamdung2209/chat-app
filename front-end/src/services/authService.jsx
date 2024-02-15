import request from '../utills/HttpRequest'

export const signUp = async (data) => {
    const res = await request.post('auth/signup', data)

    return res.data
}

export const signIn = async (data) => {
    const res = await request.post('auth/login', { ...data })

    return res.data
}

export const authMe = async () => {
    const res = await request.get('auth/me')

    return res.data
}

export const logOut = async () => {
    const res = await request.post('auth/logout')

    return res.data
}
