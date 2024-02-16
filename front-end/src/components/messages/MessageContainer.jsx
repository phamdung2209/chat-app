import useConversation from '../../zustand/useConversation'
import { TiMessages } from 'react-icons/ti'

import { useSelector } from 'react-redux'
import MessageInput from './MessageInput'
import Messages from './Messages'

function MessageContainer() {
    // const auth = useSelector((state) => state.auth)
    const { selectedConversation } = useConversation()
    return (
        <div className="md:min-w-[450px] flex flex-col">
            {!selectedConversation ? (
                <NoChatSelected />
            ) : (
                <>
                    <div className="bg-slate-500 px-4 py-2 mb-2">
                        <span className="label-text">
                            <span className="me-1">To:</span>
                            <span className="text-gray-900 font-bold">{selectedConversation.fullname}</span>
                        </span>
                    </div>

                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    )
}

export default MessageContainer

const NoChatSelected = () => {
    const auth = useSelector((state) => state.auth)
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome 👋 {auth.data.fullname} ❄</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className="text-3xl md:text-6xl text-center" />
            </div>
        </div>
    )
}
