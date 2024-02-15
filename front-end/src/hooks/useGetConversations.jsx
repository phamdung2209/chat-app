import { useEffect, useState } from 'react'
import * as userService from '../services/userService'
import toast from 'react-hot-toast'

function useGetConversations() {
    const [loading, setLoading] = useState(false)
    const [conversations, setConversations] = useState([])

    useEffect(() => {
        setLoading(true)

        // fetch conversations
        const getConversations = async () => {
            try {
                const res = await userService.getUsers()
                if (res.error) throw new Error(res.error)
                setConversations(res)
            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }

        getConversations()

        setLoading(false)
    }, [])

    return { loading, conversations }
}

export default useGetConversations
