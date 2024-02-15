import useConversation from '../../zustand/useConversation'

function Conversation({ conversation, emoji, lastIdx }) {
    const { selectedConversation, setSelectedConversation } = useConversation()
    const isSelected = selectedConversation?._id === conversation._id
    return (
        <>
            <div
                className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer select-none transition-all ease-in-out ${
                    isSelected && 'bg-sky-500'
                }`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className={`avatar online`}>
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
