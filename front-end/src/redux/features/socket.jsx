import { createSlice } from '@reduxjs/toolkit'

export const socketSlice = createSlice({
    name: 'socket',
    initialState: {
        socket: null,
        onlineUsers: [],
    },
    reducers: {
        setSocket: (state, action) => {
            state.socket = action.payload
        },
        setOnlineUsers: (state, action) => {
            state.onlineUsers = action.payload
        },
    },
})

// Export action creators
export const { setSocket, setOnlineUsers } = socketSlice.actions

// Export reducer
export default socketSlice.reducer
