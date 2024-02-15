import { createSlice } from '@reduxjs/toolkit'
// import io from 'socket.io-client'

// const socket = io('http://localhost:8080', {
//     query: {
//         userId: '65c241fbafa60d02536fa7b6',
//     },
// })

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
