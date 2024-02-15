import { useEffect, useState } from 'react'

import * as messageService from '../services/messageService'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast'

function useGetMessages() {
    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConversation } = useConversation()

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true)
            try {
                const res = await messageService.getMessages(selectedConversation._id)

                if (res.error) throw new Error(res.error)

                setMessages(res)
            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }

        if (selectedConversation?._id) getMessages()

        return () => {
            setMessages([])
        }
    }, [selectedConversation?._id, setMessages])

    return { messages, loading }
}

export default useGetMessages
