import { useSelector } from 'react-redux'
import { io } from 'socket.io-client'
import { useEffect } from 'react'

import useConversation from '../zustand/useConversation'
import notificationSound from '~/assets/sounds/notification.mp3'

function useListenMessages() {
    const auth = useSelector((state) => state.auth)
    const { messages, setMessages } = useConversation()
    const socket = io('http://localhost:8080', {
        query: {
            userId: auth.data._id,
        },
    })

    useEffect(() => {
        socket?.on('newMessage', (newMessage) => {
            newMessage.shouldShake = true
            const audio = new Audio(notificationSound)
            audio.play()
            setMessages([...messages, newMessage])
        })

        return () => socket?.off('newMessage')
    }, [socket, messages, setMessages])
}

export default useListenMessages
