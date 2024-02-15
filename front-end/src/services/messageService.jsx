import toast from 'react-hot-toast'

import request from '../utills/HttpRequest'

export const sendMessage = async (idUserSender, message) => {
    try {
        const res = await request.post(`messages/send/${idUserSender}`, {
            message,
        })

        return res.data
    } catch (error) {
        toast.error(error.message)
    }
}

export const getMessages = async (idUserSender) => {
    try {
        const res = await request.get(`messages/${idUserSender}`)

        return res.data
    } catch (error) {
        toast.error(error.message)
    }
}
