import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import io from 'socket.io-client'

import { setSocket, setOnlineUsers } from '../../redux/features/socket'
import useConversation from '../../zustand/useConversation'

function Conversation({ conversation, emoji, lastIdx }) {
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const { selectedConversation, setSelectedConversation } = useConversation()
    const isSelected = selectedConversation?._id === conversation._id
    const isOnline = useSelector((state) => state.socket.onlineUsers.includes(conversation._id))

    useEffect(() => {
        const socket = io('https://chat.dungpv.id.vn', {
            query: {
                userId: auth.data._id,
            },
        })

        dispatch(setSocket(socket))

        socket.on('getOnlineUsers', (onlineUser) => {
            dispatch(setOnlineUsers(onlineUser))
        })

        return () => {
            socket.disconnect()
        }
    }, [auth.data._id, dispatch])

    return (
        <>
            <div
                className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer select-none transition-all ease-in-out ${
                    isSelected && 'bg-sky-500'
                }`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className={`avatar ${isOnline && 'online'}`}>
                    <div className="w-12 rounded-full">
                        <img alt="user avatar" src={conversation.profilePic} />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bold text-gray-200">{conversation.fullname}</p>
                        <span className="text-xl">{emoji}</span>
                    </div>
                </div>
            </div>

            {!lastIdx && <div className="divider my-0 py-0 h-1"></div>}
        </>
    )
}

export default Conversation
