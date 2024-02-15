import { useEffect, useRef } from 'react'

import useGetMessages from '../../hooks/useGetMessages'
import Message from './Message'
import MessageSkeleton from '../skeletons/MessageSkeleton'

function Messages() {
    const { loading, messages } = useGetMessages()
    const lastMessageRef = useRef()

    useEffect(() => {
        const idTimer = setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
        }, 400)

        return () => {
            clearTimeout(idTimer)
        }
    }, [messages])

    return (
        <div className="px-4 flex-1 overflow-auto">
            {!loading &&
                messages.length > 0 &&
                messages.map((message) => (
                    <div key={message._id} ref={lastMessageRef}>
                        <Message message={message} />
                    </div>
                ))}

            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

            {!loading && messages.length === 0 && (
                <p className="text-center text-gray-500">Let send a message to start the conversation.</p>
            )}
        </div>
    )
}

export default Messages
