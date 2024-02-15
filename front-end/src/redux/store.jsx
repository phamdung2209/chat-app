import { configureStore } from '@reduxjs/toolkit'

import authReducer from './features/auth'
import socketReducer from './features/socket'

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
    reducer: {
        auth: authReducer,
        socket: socketReducer,
    },
})
