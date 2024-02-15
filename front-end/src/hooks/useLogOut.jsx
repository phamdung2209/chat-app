import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { logout as authLogout } from '../redux/features/auth'

import * as authService from '../services/authService'

function useLogOut() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const logout = async () => {
        setLoading(true)
        try {
            const res = await authService.logOut()

            if (res.error) throw new Error(res.error)

            dispatch(authLogout())
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, logout }
}

export default useLogOut
