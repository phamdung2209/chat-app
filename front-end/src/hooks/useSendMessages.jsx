import { useState } from 'react'
import toast from 'react-hot-toast'

import useConversation from '../zustand/useConversation'
import * as messageService from '../services/messageService'

function useSendMessages() {
    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConversation } = useConversation()

    const sendMessage = async (message) => {
        setLoading(true)

        try {
            const res = await messageService.sendMessage(selectedConversation._id, message)

            if (res.error) throw new Error(res.error)

            setMessages([...messages, res])
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, sendMessage }
}

export default useSendMessages
