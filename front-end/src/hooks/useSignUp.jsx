import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { login } from '../redux/features/auth'

import * as authService from '../services/authService'

function useSignUp() {
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)

    const signup = async ({ fullname, username, password, confirmPassword, gender }) => {
        const success = handleInputsError({ fullname, username, password, confirmPassword, gender })
        if (!success) return

        setLoading(true)
        try {
            const res = await authService.signUp({ fullname, username, password, confirmPassword, gender })

            if (res.error) throw new Error(res.error)
            console.log(res)

            dispatch(login())
        } catch (error) {
            toast.error(error.message)
            console.log('error', error.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, signup }
}

export default useSignUp

function handleInputsError({ fullname, username, password, confirmPassword, gender }) {
    if (!fullname || !username || !password || !confirmPassword || !gender) {
        toast.error('All fields are required')
        return false
    }

    if (password !== confirmPassword) {
        toast.error('Passwords do not match')
        return false
    }

    if (password.length < 6) {
        toast.error('Password must be at least 6 characters')
        return false
    }

    return true
}
