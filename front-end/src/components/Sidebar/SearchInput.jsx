import { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'

import useGetConversations from '../../hooks/useGetConversations'
import toast from 'react-hot-toast'
import useConversation from '../../zustand/useConversation'

function SearchInput() {
    const [search, setSearch] = useState('')
    const { conversations } = useGetConversations()
    const { setSelectedConversation } = useConversation()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (search.trim() === '') return

        const filteredConversations = conversations.filter((conversation) =>
            conversation.fullname.toLowerCase().includes(search.toLowerCase()),
        )

        if (filteredConversations.length === 0) toast.error('No user found')
        else {
            setSelectedConversation(filteredConversations[0])
            setSearch('')
        }
    }

    return (
        <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search…"
                className="input input-bordered rounded-full"
                value={search}
                onChange={(e) => {
                    if (!e.target.value.startsWith(' ')) {
                        setSearch(e.target.value)
                    }
                }}
            />

            <button type="submit" className="btn btn-circle bg-sky-500 text-white">
                <IoSearchSharp className="w-6 h-6 outline-none" />
            </button>
        </form>
    )
}

export default SearchInput
