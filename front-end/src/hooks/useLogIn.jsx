import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login as Authlogin } from '../redux/features/auth'

import * as authService from '../services/authService'
import toast from 'react-hot-toast'

function useLogIn() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const login = async ({ username, password }) => {
        const success = handleInputErrors({ username, password })
        if (!success) return

        setLoading(true)

        try {
            const res = await authService.signIn({ username, password })

            if (res.error) throw new Error(res.error)

            dispatch(Authlogin())
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, login }
}

export default useLogIn

function handleInputErrors({ username, password }) {
    if (!username || !password) {
        toast.error('Please fill in all fields')
        return false
    }

    return true
}
