import { useSelector } from 'react-redux'
import useConversation from '../../zustand/useConversation'
import { extractTime } from '../../utills/extractTime'

function Message({ message }) {
    const auth = useSelector((state) => state.auth)

    const { selectedConversation } = useConversation()
    const fromMe = message.senderId === auth.data._id
    const fromMeClass = fromMe ? 'chat-end' : 'chat-start'
    const fromMeBubble = fromMe ? 'bg-blue-500 text-white' : ''
    const profilePic = fromMe ? auth.data.profilePic : selectedConversation?.profilePic

    return (
        <div>
            <div className={`chat ${fromMeClass}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="" src={profilePic} />
                    </div>
                </div>
                <div className="chat-header"></div>
                <div className={`chat-bubble ${fromMeBubble}`}>{message.message}</div>
                <div className="chat-footer opacity-50">{extractTime(message.createdAt)}</div>
            </div>
        </div>
    )
}

export default Message
