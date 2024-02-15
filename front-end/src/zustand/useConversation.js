import { create } from 'zustand'

const useConversation = create((set) => ({
    messages: [],
    setMessages: (messages) => set({ messages }),

    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
}))

export default useConversation
